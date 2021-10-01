import { useContract } from '../web3-contracts'

import { serializeError } from 'eth-rpc-errors'

import erc20 from '../abi/ERC20.json'

export function useApprove(tokenAddress, farmAddress, amount, chainId) {
  const contract = useContract(tokenAddress, erc20)

  return () => {
    return new Promise((resolve, reject) => {
      contract
        .approve(farmAddress, amount)
        .then(x => {
          resolve(x)
        })
        .catch(err => reject(serializeError(err)))
    })
  }
}
