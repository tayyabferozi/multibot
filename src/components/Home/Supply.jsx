import clsx from "clsx";
import React, { useState } from "react";

const Supply = () => {
  const [numberActive, setNumberActive] = useState(1);

  return (
    <div className="px-5 relative">
      <img
        src="/assets/bg-supply.png"
        alt="bg"
        className="top-5 absolute left-1/2 -translate-x-1/2"
      />
      <img
        src="/assets/bg-supply-2.png"
        alt="bg"
        className="top-96 absolute left-1/2 -translate-x-1/2"
      />
      <div className="max-w-[1411px] mx-auto pt-8 pb-[116px]">
        <div className="bg-[rgba(0,0,0,0.20)] backdrop-blur-md py-8 md:py-[60px] px-8 md:px-[72px] flex flex-col lg:flex-row gap-7 lg:gap-0">
          <div className="flex gap-4 md:gap-6 items-center lg:pr-10 xl:pr-[86px] relative">
            {new Array(4).fill(0).map((el, idx) => {
              return (
                <div
                  key={"circle-" + idx}
                  className={clsx(
                    "rounded-full flex justify-center items-center w-[50px] md:w-[62px] h-[50px] md:h-[62px] border border-solid border-transparent cursor-pointer transition-all",
                    numberActive === idx + 1
                      ? "bg-[#C5EC73] text-black"
                      : "border-white text-white"
                  )}
                  onClick={() => setNumberActive(idx + 1)}
                >
                  {idx + 1}
                </div>
              );
            })}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="116"
              viewBox="0 0 2 116"
              fill="none"
              className="absolute right-0 top-0 h-full hidden lg:block"
            >
              <path
                d="M1 0L0.999995 116"
                stroke="url(#paint0_linear_1_160)"
                stroke-opacity="0.2"
                stroke-width="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_160"
                  x1="1"
                  y1="-4.83699e-08"
                  x2="0.999995"
                  y2="103.874"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.51" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex-grow flex flex-wrap items-center gap-5 md:gap-9 lg:pl-10 xl:pl-[15%]">
            <div className="text-white text-2xl md:text-[28px]">
              Total Supply:
            </div>
            <div className="text-[#C5EC73] text-4xl md:text-[60px]">
              1.000.000
            </div>
          </div>
        </div>

        <div className="mt-[88px]">
          <div className="text-4xl md:text-[60px] text-white md:px-11">
            <span className="hidden lg:inline">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;
            </span>
            <svg
              className="inline"
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
            >
              <path
                d="M40.9027 23.5C32.3906 25.678 25.678 32.3906 23.5 40.9027C21.322 32.3906 14.6094 25.678 6.09728 23.5C14.6094 21.322 21.322 14.6094 23.5 6.09728C25.678 14.6094 32.3906 21.322 40.9027 23.5Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>{" "}
            <span className="text-[#C5EC73]">MULTI BOT</span> IS THE 1ST EVER
            <span className="text-[#C5EC73]"> BITCOIN TRADING BOT</span> WITH
            INTEGRATED EVM-SVM BRIDGE
          </div>
        </div>

        <div className="mt-12 md:mt-[108px]">
          <div className="flex justify-center md:justify-between gap-5 md:gap-8 flex-wrap">
            <div className="w-[320px] h-[440px] py-10 px-8 relative">
              <img
                className="absolute left-0 top-0 w-full h-full"
                src="/assets/bg-fancy-card.png"
                alt="bg"
              />

              <div className="relative">
                <div className="text-white text-[28px]">Take Profit</div>
                <div className="text-[#999999] text-xl mt-5 font-abel">
                  You can select your Take profit % target.
                </div>
              </div>

              <img
                src="/assets/subtract-card-1.png"
                alt="subtract"
                className="left-0 bottom-0 w-full absolute"
              />
            </div>
            <div className="w-[320px] h-[440px] py-10 px-8 relative">
              <img
                className="absolute left-0 top-0 w-full h-full"
                src="/assets/bg-fancy-card.png"
                alt="bg"
              />

              <div className="relative">
                <div className="text-white text-[28px]">Anti-Mev</div>
                <div className="text-[#999999] text-xl mt-5 font-abel">
                  Protect your trades and outsmart sandwich attacks.
                </div>
              </div>

              <img
                src="/assets/subtract-card-2.png"
                alt="subtract"
                className="left-0 bottom-0 w-full absolute"
              />
            </div>
            <div className="w-[320px] h-[440px] py-10 px-8 relative">
              <img
                className="absolute left-0 top-0 w-full h-full"
                src="/assets/bg-fancy-card.png"
                alt="bg"
              />

              <div className="relative">
                <div className="text-white text-[28px]">Stop Loss</div>
                <div className="text-[#999999] text-xl mt-5 font-abel">
                  You can select your Stop loss % target.
                </div>
              </div>

              <img
                src="/assets/subtract-card-3.png"
                alt="subtract"
                className="left-0 bottom-0 w-full absolute"
              />
            </div>
            <div className="w-[320px] h-[440px] py-10 px-8 relative">
              <img
                className="absolute left-0 top-0 w-full h-full"
                src="/assets/bg-fancy-card.png"
                alt="bg"
              />

              <div className="relative">
                <div className="text-white text-[28px]">Anti-Rug</div>
                <div className="text-[#999999] text-xl mt-5 font-abel">
                  Safeguard your investments and outsmart fraudulent projects.
                </div>
              </div>

              <img
                src="/assets/subtract-card-4.png"
                alt="subtract"
                className="left-0 bottom-0 w-full absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supply;
