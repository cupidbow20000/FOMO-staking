import { Features, features } from "./Features";
import { useState } from "react";
import { Features_mobile } from "./Features_mobile";

export const Header = () => {
  const [isHideShow, setIsHideShow] = useState(false);

  const hideshow = () => {
    if (isHideShow == true) setIsHideShow(false);
    if (isHideShow == false) setIsHideShow(true);
  };

  return (
    <main className="fixed w-full  bg-black  border-b-[1px]   z-50 bg-opacity-60 backdrop-blur-lg">
      <div className="mx-auto text-white flex py-[20px] px-[20px]   max-w-[1200px] ">
        {/* <div className="flex mx-auto "> */}
        <div className="flex lg:w-1/4 w-1/3">
          <a href="/" className="flex">
            <img
              className=" rounded-[50%]"
              src="images/logo.jpg"
              width={"40px"}
            ></img>
            <div className="py-[5px] px-[10px]  text-[20px] md:block hidden font-bold text-[#1ED760]">
              FOMO ON XRD
            </div>
          </a>
        </div>

        <div className="lg:flex mx-auto  py-[7px] hidden">
          <Features />
        </div>

        <div className="lg:w-1/4 w-2/3 ">
          <div className=" float-right flex relative">
            <div
              className="  py-[7px] px-[20px] rounded-lg  hover:cursor-pointer hover:bg-opacity-80 lg:hidden block"
              onClick={hideshow}
            >
              {!isHideShow && (
                <img src="/images/icon/menu-mobile.svg" width={25} />
              )}
              {isHideShow && <img src="/images/icon/cross.svg" width={25} />}
            </div>
          </div>
        </div>
        <div>
          <radix-connect-button />
        </div>
      </div>

      {isHideShow && (
        <div className="flex lg:hidden py-[7px] ">
          <Features_mobile />
        </div>
      )}
    </main>
  );
};
