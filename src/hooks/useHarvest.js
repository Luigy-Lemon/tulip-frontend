import { useContract } from '../web3-contracts'
import honeyFarm from '../abi/honeyfarm.json'
import { serializeError } from 'eth-rpc-errors'

export function useHarvest(id, farmAddress, chainId) {
  const contract = useContract(farmAddress, honeyFarm)
  return () => {
    return new Promise((resolve, reject) => {
      contract
        .withdrawRewards(id)
        .then(x => {
          return resolve(x)
        })
        .catch(err => reject(serializeError(err)))
    })
  }
}
