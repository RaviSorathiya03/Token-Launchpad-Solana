import './App.css'
import { TokenLaunchpad } from './components/TokenLaunchpad'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css'

function App() {
  return (
    <ConnectionProvider endpoint={'https://api.devnet.solana.com'}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider> 
        <div className="h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col justify-center items-center p-4">
            <div className='flex justify-between w-screen p-10'>
            <WalletMultiButton />
            <WalletDisconnectButton />
            </div>
            <TokenLaunchpad></TokenLaunchpad>
          </div>
        </WalletModalProvider>
       
       
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
