import { useState } from "react";

import GroupComponent from "./GroupComponent";
import MoreServices from "./MoreServices";
import PropTypes from "prop-types";

const Service = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      className={`service self-stretch flex flex-row items-start justify-start pt-0 pb-14 box-border max-w-full text-left text-base text-darkslategray font-font ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[35px] max-w-full z-[1000] relative">
        <div className="flex justify-between pt-[22px] w-full">
          <div className="log ml-[10px]">
            <img src="/logo_main.png" alt="" />
          </div>
          <div
            className={`mr-[10px] z-[998] menu-icon ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {isOpen && (
          <div className="w-full z-[997] absolute bg-menucolor pt-[22px]">
            <div className="log_sp ml-[10px]">
              <img src="/logo_sp.png" alt="" />
            </div>
            <div className="flex flex-col p-8 m-auto">
              <p className="pl-[1px] border-t border-b-menuborder text-white font-[inherit]">TOP</p>
              <p className="pl-[1px] text-white">SERVICES</p>
              <p className="pl-[1px] text-white">COMPANY</p>
              <p className="pl-[1px] text-white">BLOG</p>
              <div className="w-full border-2 border-white px-[120px] py-5 text-white text-xl font-[inherit] mt-[190px]">お問合せ</div>
            </div>
          </div>
        )}
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-16 text-sm">
          <div className="w-[233px] flex flex-col items-start justify-start gap-[63px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[25px]">
              <div className="relative tracking-[0.28em] font-medium inline-block min-w-[56px]">
                scroll
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-center text-34xl">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[0.18em] font-normal font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#90b1eb,_#7dbeba)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Service
              </h1>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[78px] mt-[-5px] text-mid font-zen-kaku-gothic-new">
                <b className="relative inline-block min-w-[68px]">サービス</b>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-center font-zen-kaku-gothic-new">
          <div className="flex-1 relative inline-block max-w-full">
            <p className="m-0">マーケティングから構築、保守運用まで</p>
            <p className="m-0">ワンストップで対応することで、</p>
            <p className="m-0">「理想のシステム」を提案します。</p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-6 pb-[7px] box-border max-w-full text-center text-lg text-main font-zen-kaku-gothic-new">
          <div className="flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[22px]">
              <div className="h-[150px] flex-1 relative [filter:drop-shadow(0px_0px_20px_rgba(113,_133,_156,_0.2))] min-w-[97px]">
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(134.06deg,_#fafcff,_#f0faff)] w-full h-full" />
                  <img
                    className="absolute top-[27px] left-[40px] w-[70px] h-[68px] overflow-hidden z-[1]"
                    loading="lazy"
                    alt=""
                    src="/--1.svg"
                  />
                </div>
                <div className="absolute top-[97px] left-[12px] font-medium inline-block min-w-[126px] z-[1]">
                  マーケティング
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[97px]">
                <div className="self-stretch h-[150px] relative">
                  <div className="absolute top-[94px] left-[40px] font-medium inline-block min-w-[70px] z-[1]">
                    Web制作
                  </div>
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-color border-color1 border-[0px] border-solid box-border w-full h-full" />
                    <img
                      className="absolute top-[27px] left-[33px] w-[84px] h-[62px] overflow-hidden z-[1]"
                      loading="lazy"
                      alt=""
                      src="/--1-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[22px]">
              <GroupComponent prop="/--1-2.svg" prop1="インフラ構築" />
              <GroupComponent
                propBackgroundColor="unset"
                prop="/--1-3.svg"
                propHeight="63px"
                prop1="システム開発"
              />
            </div>
          </div>
        </div>
        <MoreServices />
      </div>
    </section>
  );
};

Service.propTypes = {
  className: PropTypes.string,
};

export default Service;
