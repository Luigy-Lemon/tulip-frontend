import { getContract } from '../web3-contracts'
import erc20 from '../abi/ERC20.json'

export async function useCheckApprovedToken(
  tokenAddress,
  farmAddress,
  account,
  balance,
  chainId
) {
  if (tokenAddress !== undefined && account !== undefined && balance) {
    const contract = getContract(tokenAddress, erc20)
    const allowance = await contract.allowance(account, farmAddress)
    if (allowance.lt(balance)) {
      return false
    }
    return true
  }
}
