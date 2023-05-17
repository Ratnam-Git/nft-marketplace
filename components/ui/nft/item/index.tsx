/* eslint-disable @next/next/no-img-element */

import { FunctionComponent } from "react";
import { Nft } from "../../../../types/nft";

type NftItemProps = {
  item: Nft;
  buyNft: (token: number, value: number) => Promise<void>;
}

function shortifyAddress(address: string) {
  return `0x****${address.slice(-4)}`
}

const NftItem: FunctionComponent<NftItemProps> = ({ item, buyNft }) => {
  function fetchBlob(image: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="flex-shrink-0">
        <img
          className={`h-[28rem] w-[35rem] object-contain`}
          src={item.meta.image}
          alt="New NFT"
        />
      </div>
      <div className="flex-1 bg-gray-900 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center mt-2">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src="/images/default_avatar.png"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-100 group-hover:text-gray-900">Creator</p>
                <p className="text-xs font-medium text-gray-400 group-hover:text-gray-700">{shortifyAddress(item.creator)}</p>
              </div>
            </div>
            <p className="text-sm font-medium text-indigo-600">
              Pokemon NFT
            </p>
          </div>
          <div className="block mt-2">
            <p className="text-xl font-semibold text-white">{item.meta.name}</p>
            <p className="mt-3 mb-3 text-base text-gray-300">{item.meta.description}</p>
          </div>
        </div>
        <div className="overflow-hidden mb-4">
          <dl className="-mx-4 -mt-4 flex flex-wrap">
            <div className="flex flex-col px-4 pt-4">
              <dt className="order-2 text-sm font-medium text-gray-200">Price</dt>
              <dd className="order-1 text-xl font-extrabold text-indigo-600">
                <div className="flex justify-center items-center">
                  {item.price}
                  <img className="h-6" src="/images/small-eth.webp" alt="ether icon" />
                </div>
              </dd>
            </div>
            {item.meta.attributes.map(attribute =>
              <div key={attribute.trait_type} className="flex flex-col px-4 pt-4">
                <dt className="order-2 text-sm font-medium text-gray-200">
                  {attribute.trait_type}
                </dt>
                <dd className="order-1 text-xl font-extrabold text-indigo-600">
                  {attribute.value}
                </dd>
              </div>
            )}
          </dl>
        </div>
        <div>
          <button
            onClick={() => {
              buyNft(item.tokenId, item.price);
            }}
            type="button"
            className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed mr-5 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Buy
          </button>

        </div>
      </div>
    </>
  )
}

export default NftItem;


//            className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed mr-5 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//px-4