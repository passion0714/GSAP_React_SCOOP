import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`ml-[-38px] w-[451px] h-[657px] relative max-w-[121%] shrink-0 z-[3] text-left text-17xl text-color font-noto-sans-jp ${className}`}
    >
      <div className="absolute h-full top-[0px] bottom-[0px] left-[38px] w-[375px] ">
        <div className="absolute top-[47px] left-[-38px] [filter:blur(80px)] bg-lightsteelblue w-[451px] h-[110px]" />
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
          alt=""
          src="/group-2897@2x.png"
        />
        <img
          className="absolute top-[17px] left-[251px] w-[99px] h-[99px] object-contain z-[2] cursor-pointer"
          loading="lazy"
          alt=""
          src="/group-19@2x.png"
        />
      </div>
      <div className="absolute top-[63px] left-[58px] w-[335px] flex flex-col items-start justify-start gap-[68px] z-[3]">
        <h1 className="m-0 relative text-inherit tracking-[0.04em] leading-[36px] font-black font-[inherit] inline-block min-w-[109px]">
          LOGO
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-8 text-sm">
          <div className="self-stretch h-[34px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-4">
            <div className="w-[279px] flex flex-row items-center justify-between py-0 pl-0 pr-5 box-border gap-5">
              <div className="relative leading-[18px] font-medium inline-block min-w-[49px]">
                Service
              </div>
              <img className="h-3 w-3 relative" alt="" src="/icon.svg" />
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-15.svg"
            />
          </div>
          <div className="self-stretch h-[34px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-4">
            <div className="w-[279px] flex flex-row items-center justify-between py-0 pl-0 pr-5 box-border gap-5">
              <div className="relative leading-[18px] font-medium inline-block min-w-[51px] shrink-0">
                Mission
              </div>
              <img className="h-3 w-3 relative" alt="" src="/icon.svg" />
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-15.svg"
            />
          </div>
          <div className="self-stretch h-[34px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-4">
            <div className="w-[279px] flex flex-row items-center justify-between py-0 pl-0 pr-5 box-border gap-5">
              <div className="relative leading-[18px] font-medium inline-block min-w-[31px] shrink-0">
                Blog
              </div>
              <img className="h-3 w-3 relative" alt="" src="/icon.svg" />
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-15.svg"
            />
          </div>
        </div>
        <div className="self-stretch h-[91px] flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border gap-6 text-xs">
          <div className="w-full flex-1 flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-[39px] box-border gap-x-4 gap-y-6 max-w-[327px]">
            <div className="relative inline-block min-w-[48px]">利用規約</div>
            <div className="relative inline-block min-w-[120px]">
              プライバシーポリシー
            </div>
            <div className="relative">セキュリティーポリシー</div>
            <div className="relative">特定商取引に基づく表記</div>
          </div>
          <div className="relative text-ca">
            Copyright © xxxxxx.Ltd All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
