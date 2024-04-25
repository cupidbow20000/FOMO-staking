import { useState } from "react";

export const StakingPage = () => {
  const [inputAmount, setInputAmount] = useState(0);
  const unStake = () => {

  }
  const Stake = () => {
    
  }
  const claim = () => {
    
  }
  return (
    
      <div className=" w-full h-full py-[200px] lg:flex  text-white bg-[url('../public/images/back1.png')] bg-opacity-0 bg-cover bg-center">
        {/* <a href="/hi">afdafdaf</a> */}
        <img src="images/blur-ai.png" className="absolute hidden lg:block" ></img>
        <div className="mx-auto bg-[#232325] bg-opacity-10 backdrop-blur-lg lg:min-w-[500px] min-w-[320px] p-[20px] rounded-lg relative border-[1px] border-gray-600">
          <div className="flex relative">
            
          </div>
          <div className="text-[30px] text-green-500 font-bold py-[10px] text-center ">STAKING</div>
          
          <div className="bg-[#0c0c0c] bg-opacity-60 px-[20px] rounded-t-lg my-[5px] border-l-2 border-green-500">
            <div className="flex py-[10px]">
              <div className="w-1/2">APY:</div>
              <div className="w-1/2"><div className="float-right">100%</div></div>
            </div>
            <div className="flex py-[10px]">
              <div className="w-1/2">Earn:</div>
              <div className="w-1/2"><div className="float-right">FOMO</div></div>
            </div>
            <div className="flex py-[10px]">
              <div className="w-1/2">Your Period:</div>
              <div className="w-1/2"><div className="float-right">30 Days</div></div>
            </div>
          </div>
          <div className="bg-[#0c0c0c] bg-opacity-60 px-[20px] my-[5px] border-l-2 border-green-500">
            <div className="flex pt-[20px] pb-[5px]">
              <div className="w-1/2">
              <div className="text-[12px] text-gray-400">
                FOMO STAKED:
              </div>
              <div className="text-[20px] font-bold">0.000</div>
              
              </div>
              <div className="w-1/2">
                <div className="float-right">
                  <div onClick={unStake} className=" bg-green-500 p-[10px] w-[120px] text-center font-bold rounded-t-lg hover:cursor-pointer hover:bg-opacity-80">
                    UNSTAKE
                  </div>
                </div>
              </div>
            </div>
            <hr className=" opacity-10"></hr>
            <div className="flex pb-[10px] pt-[5px]">
              <div className="w-1/2">
              <div className="text-[12px] text-gray-400">
                FOMO EARNED:
              </div>
              <div className="text-[20px] font-bold">0.000</div>
              
              </div>
              <div className="w-1/2">
              <div className="float-right">
                  <div onClick={claim} className=" bg-green-500 p-[10px] w-[120px] text-center font-bold rounded-b-lg hover:cursor-pointer hover:bg-opacity-80">
                    CLAIM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0c0c0c] bg-opacity-60 px-[20px] my-[5px] py-[10px] rounded-b-lg border-l-2 border-green-500">
            <div className="flex text-[12px]">
              <div className="text-gray-400">Balance:</div>
              <div className="">0.00</div>
              <div className="text-gray-400">&nbsp; FOMO</div>
            </div>
            <div className="relative">
            <input 
            type="number" 
            placeholder="Input Amount" 
            min={1} 
            value={inputAmount}
            onChange={(e) => setInputAmount(parseInt(e.target.value))}
            className="bg-[#232325] bg-opacity-60 p-[10px] my-[5px] outline-none w-full rounded-t-lg" ></input>
            <div className="absolute right-[35px] top-[15px]">MAX</div>
            </div>
            <div className="flex text-[12px] items-end">
              <div className="text-gray-400">You are staking &nbsp;</div>
              <div>{inputAmount}</div>
              <div className="text-gray-400">&nbsp; FOMO</div>
            </div>
            <div className="bg-green-500 p-[10px] text-center my-[5px] rounded-b-lg font-bold hover:cursor-pointer hover:bg-opacity-80">
              STAKING
            </div>
            
          </div>
          <img src="images/traced-fomo-left.png " className="absolute left-[0px] top-[-70px] lg:w-[150px] w-[100px]"></img>
          <img className="absolute right-[0px] top-[-70px]  lg:w-[150px] w-[100px]" src="/images/traced-fomo-right.png" width={100}></img>
        </div>
        <div className="mx-auto bg-[#232325] bg-opacity-10 backdrop-blur-lg lg:min-w-[500px] min-w-[320px] p-[20px] rounded-lg relative border-[1px] border-gray-600"> 
        <iframe title="swap-widget" src="https://ociswap.com/widgets/swap?from=resource_rdx1t4a42s786rs0nz6lv3skg2kvk94alxrpd5v73q9e7jrt33fsalcg0m&to=resource_rdx1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxradxrd&theme=dark" scrolling="no" width="100%" height="550px" style={{overflow:"hidden", border:"none", minWidth:"250px", maxWidth:"960px"}}/>
          {/* <img className="mx-w-[500px]" src="/images/Frame.png"></img> */}
        </div>
      </div>
    
  );
};
