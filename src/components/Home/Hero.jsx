import React from "react";

const Hero = () => {
  return (
    <div className="px-5 relative">
      <img
        className="w-[100vw] left-0 absolute top-1/2 -translate-y-1/2 hidden lg:block"
        src="/assets/home-hero-line.svg"
        alt="line"
      />
      <div className="max-w-[1411px] mx-auto pt-[90px] pb-[40px] sm:pb-[110px]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <img src="/assets/home-hero-heading.svg" alt="heading" />

            <ul className="font-abel text-[rgba(255,255,255,0.60)] text-lg mt-16 list-disc pl-5 max-w-[483px]">
              <li>
                Multi bot allow smooth trading on Solana chain while also
                offering integrated ETH - BTC bridging in the bot.
              </li>
              <li>
                Bridge ETH to BTC and vice versa with just a few taps right in
                the Multi bot Bot.
              </li>
            </ul>
          </div>

          <div>
            <img
              className="mix-blend-screen"
              src="/assets/home-hero-right.gif"
              alt="illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
