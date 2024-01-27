import clsx from "clsx";

const Roadmap = () => {
  return (
    <div className="px-5 lg:px-0 relative lg:pb-[80px] 2xl:pb-[140px]">
      <img
        src="/assets/bg-roadmap.png"
        alt="bg"
        className="top-5 absolute left-1/2 -translate-x-1/2"
      />
      <h1 className="text-center text-4xl sm:text-[60px] px-5 text-white">
        <span className="text-[#C5EC73]">MULTI BOT</span> Roadmap
      </h1>
      <div className="relative">
        <img
          className="block absolute -left-5 lg:left-0 lg:static opacity-20 lg:opacity-100 mix-blend-color-dodge -mt-20 w-[600px] 2xl:w-auto"
          src="/assets/roadmap-left.png"
          alt="roadmap"
        />
        <img
          className="absolute left-0 top-0 w-[400px] 2xl:w-auto hidden lg:block"
          src="/assets/circular-dots.png"
          alt="dots"
        />

        <RoadmapItem
          title="Q4 - 2023"
          className="lg:top-[170px] 2xl:top-[300px] lg:left-[450px] 2xl:left-[680px]"
        >
          <li>Socials Formation</li>
          <li>Smart Contract Development</li>
          <li>Telegram Community</li>
          <li>Games Development</li>
          <li>Website Development</li>
          <li>Uniswap Stealth Launch</li>
          <li>Games Development</li>
          <li>CoinGecko &amp; CoinMarketCap</li>
          <li>Revenue Share System goes live</li>
        </RoadmapItem>

        <RoadmapItem
          title="Q3 - 2023"
          className="lg:top-[434px] 2xl:top-[916px] lg:left-[440px] 2xl:left-[510px]"
        >
          <li>Socials Formation</li>
          <li>Smart Contract Development</li>
          <li>Telegram Community</li>
          <li>Games Development</li>
          <li>Website Development</li>
          <li>Uniswap Stealth Launch</li>
          <li>Games Development</li>
          <li>CoinGecko &amp; CoinMarketCap</li>
          <li>Revenue Share System goes live</li>
        </RoadmapItem>

        <RoadmapItem
          title="Q2 - 2023"
          className="lg:top-[564px] 2xl:top-[1060px] lg:left-[340px] 2xl:left-[290px]"
        >
          <li>Socials Formation</li>
          <li>Smart Contract Development</li>
          <li>Telegram Community</li>
          <li>Games Development</li>
          <li>Website Development</li>
          <li>Uniswap Stealth Launch</li>
          <li>Games Development</li>
          <li>CoinGecko &amp; CoinMarketCap</li>
          <li>Revenue Share System goes live</li>
        </RoadmapItem>

        <RoadmapItem
          title="Q2 - 2023"
          className="lg:top-[650px] 2xl:top-[720px] lg:left-[200px] 2xl:left-[660px]"
        >
          <li>Socials Formation</li>
          <li>Smart Contract Development</li>
          <li>Telegram Community</li>
          <li>Games Development</li>
          <li>Website Development</li>
          <li>Uniswap Stealth Launch</li>
          <li>Games Development</li>
          <li>CoinGecko &amp; CoinMarketCap</li>
          <li>Revenue Share System goes live</li>
        </RoadmapItem>
      </div>

      <div className="max-w-[1411px] mx-auto"></div>
    </div>
  );
};

export default Roadmap;

const RoadmapItem = ({ title, className, children }) => {
  return (
    <div
      className={clsx(
        "relative my-5 lg:my-0 sm:ml-24 lg:ml-0 lg:absolute",
        className
      )}
    >
      <img
        className="w-14 absolute -left-[100px] top-[36px] hidden sm:block lg:hidden"
        src="/assets/circle.svg"
        alt="circle"
      />
      <div className="bg-[#00000033] p-[46px] rounded-[20px] lg:hover:w-[540px] 2xl:hover:w-[750px] group lg:w-[286px] hover:h-auto lg:h-[126px] transition-all overflow-hidden">
        <img
          src="/assets/triangle.png"
          alt="triangle"
          className="absolute top-12 -left-[0] -translate-x-full opacity-40 hidden sm:block"
        />
        <div className="text-[28px] text-white border-solid border-l-[11px] border-l-[#C5EC73] pl-[18px] mb-10 2xl:mb-20">
          {title}
        </div>

        <ul className="font-abel grid sm:grid-cols-2 text-white list-disc pl-5 lg:opacity-0 group-hover:opacity-100 pointer-events-none group-hover:delay-100 group-hover:pointer-events-auto transition-all">
          {children}
        </ul>
      </div>
    </div>
  );
};
