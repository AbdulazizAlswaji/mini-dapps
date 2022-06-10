import { useState } from "react";
import {ethers, BigNumber} from 'ethers';
import roboPunksNFT from './RoboPunksNFT.json';

const roboPunksNFTAddress = '0xF0393869f11b39B02AEcd2F013785422D4aa9737';

const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    
    let  isConnected  = 0;
    if (typeof(accounts) !== 'undefined') {
         isConnected = Boolean(accounts[0]);
    }

    async function handleMint () {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress, roboPunksNFT.abi, signer
            );

            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString())
                });
                console.log('response:', response);
            } catch(err) {
                console.log('error:', err);
            }
        }
    }

        const handleDecrement = () => {
            if (mintAmount <= 1) return;
            setMintAmount(mintAmount - 1);
        }

        const handleIncrement = () => {
            if (mintAmount >= 3) return;
            setMintAmount(mintAmount + 1);
        }
    

        return (
            <div>
                <h1> RoboPunks</h1>
                {isConnected ? (
                    <div>
                        <div>
                            <button onClick={handleDecrement}>-</button>
                            <input type="number" value={mintAmount} />
                            <button onClick={handleIncrement}>+</button>
                        </div>
                        <button >Mint</button>
                    </div>
                ):
                (
                    <p>You are not connected</p>
                )}
            </div>
        );
    
}

export default MainMint;