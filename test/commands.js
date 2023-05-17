

const instance = await NftMarket.deployed();

instance.mintToken("https://gateway.pinata.cloud/ipfs/QmX3sMVwuLA28ZWi62p2LPTLaN5Wq9d7cTJeEDYnhKjWoj?_gl=1*7gk5tj*rs_ga*ZjVmMmNlM2QtYWFiNC00NThjLTlmMTQtOWYxYmFiZDgxZDI2*rs_ga_5RMPXG14TE*MTY4MTg5MDI4MS4xNy4xLjE2ODE4OTA0ODYuNTcuMC4w", "500000000000000000", { value: "25000000000000000", from: accounts[0] })
instance.mintToken("https://gateway.pinata.cloud/ipfs/QmXZpXpwpZivrozWdSPE7b68gKJyhWbijD3txQbS1Wp67Q?_gl=1*b9c57q*rs_ga*ZjVmMmNlM2QtYWFiNC00NThjLTlmMTQtOWYxYmFiZDgxZDI2*rs_ga_5RMPXG14TE*MTY4MTg5MDI4MS4xNy4xLjE2ODE4OTA0ODYuNTcuMC4w", "300000000000000000", { value: "25000000000000000", from: accounts[0] })