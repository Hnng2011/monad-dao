import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { metaMask } from 'wagmi/connectors'

export function useWallet() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()

  const connectWallet = async () => {
    try {
      await connect({ connector: metaMask() })
    } catch (error) {
      console.error('Failed to connect wallet:', error)
    }
  }

  return {
    address,
    isConnected,
    connect: connectWallet,
    disconnect,
  }
}