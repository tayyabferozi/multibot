import clsx from "clsx";
import { useState } from "react";

const navItems = ["ABOUT US", "ABILITY", "ROADMAP", "TELEGRAM", "TWITTER"];

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  console.log(isMenuActive);

  return (
    <div className="px-5">
      <div className="relative max-w-[1700px] mx-auto py-10">
        <div className="flex items-center justify-between">
          <div className="2xl:w-1/3">
            <img className="w-[224px]" src="/assets/logo.png" alt="logo" />
          </div>

          <div
            className={clsx(
              "fixed left-0 w-screen xl:w-auto h-screen xl:h-auto xl:static 2xl:w-1/3 z-50 bg-[#C5EC73] xl:bg-transparent transition-all",
              isMenuActive ? "top-0" : "-top-full"
            )}
          >
            <div
              className="text-[#666] text-5xl sm:text-7xl font-abel right-9 md:right-14 top-5 md:top-10 absolute xl:hidden"
              onClick={() => setIsMenuActive(false)}
            >
              &times;
            </div>
            <div className="h-full xl:h-auto flex flex-col items-center justify-center xl:flex-row gap-6 sm:gap-[42px] ">
              {navItems.map((el, idx) => {
                return (
                  <div
                    key={"nav-item-" + idx}
                    className={clsx(
                      idx === 0 ? "text-white" : "text-[#666]",
                      "cursor-pointer text-4xl xl:text-base"
                    )}
                    onClick={() => setIsMenuActive(false)}
                  >
                    {el}
                  </div>
                );
              })}
              <div className="flex flex-col-reverse gap-5 xl:hidden">
                <button className="text-white border border-solid border-[rgba(255,255,255,0.90)] h-12 px-[60px]">
                  TRY MUBOT
                </button>
                <button className="bg-[#C5EC73] border border-solid border-[#26242C] h-12 px-[60px]">
                  BUY $MUBOT
                </button>
              </div>
            </div>
          </div>

          <div
            className="xl:hidden flex flex-col gap-2"
            onClick={() => setIsMenuActive(true)}
          >
            <div className="w-10 h-[3px] bg-[#c5ec73]"></div>
            <div className="w-10 h-[3px] bg-[#c5ec73]"></div>
            <div className="w-10 h-[3px] bg-[#c5ec73]"></div>
          </div>

          <div className="2xl:w-1/3 hidden xl:block">
            <div className="flex justify-end gap-5">
              <button className="text-white border border-solid border-[rgba(255,255,255,0.30)] h-12 px-[60px]">
                TRY MUBOT
              </button>
              <button className="bg-[#C5EC73] border border-solid border-[#26242C] h-12 px-[60px]">
                BUY $MUBOT
              </button>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1937"
          height="3"
          viewBox="0 0 1937 3"
          fill="none"
          className="w-full absolute left-0 bottom-0"
        >
          <path
            d="M-1 1C12.3655 2.8111 1296.57 1.75462 1937 1"
            stroke="url(#paint0_linear_1_148)"
            stroke-opacity="0.2"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_148"
              x1="1937"
              y1="1.89546"
              x2="-1"
              y2="1.89546"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="0.51" stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Header;
