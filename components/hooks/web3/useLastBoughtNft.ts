import { CryptoHookFactory } from "@_types/hooks";
import { Nft } from "@_types/nft";
import useSWR from "swr";
import { ethers } from "ethers";

type UseLastBoughNftResponse = {};
type UseLastBoughNftFactory = CryptoHookFactory<
  Nft | null,
  UseLastBoughNftResponse
>;

export type UseLastBoughNftHook = ReturnType<UseLastBoughNftFactory>;

export const hookFactory: UseLastBoughNftFactory =
  ({ contract }) =>
  () => {
    const { data, ...swr } = useSWR(
      contract ? "web3/useLastBoughtNft" : null,
      async () => {
        const item = await contract!.getLastBoughtNFT();

        if (item.creator === "0x0000000000000000000000000000000000000000") {
          return null;
        }

        const tokenURI = await contract!.tokenURI(item.tokenId);
        const metaRes = await fetch(tokenURI);
        const meta = await metaRes.json();

        const nft = {
          price: parseFloat(ethers.utils.formatEther(item.price)),
          tokenId: item.tokenId.toNumber(),
          creator: item.creator,
          isListed: item.isListed,
          meta,
        };

        return nft as Nft;
      }
    );
    return {
      ...swr,
      data,
    };
  };
