import { useMemo } from "react";
import PropTypes from "prop-types";

const MoreServices = ({ className = "", propHeight }) => {
  const moreServicesStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`self-stretch h-[66px] flex flex-row items-start justify-start py-0 pl-[35px] pr-[25px] box-border text-left text-base text-main font-font ${className}`}
      style={moreServicesStyle}
    >
      <div className="h-[70px] flex-1 rounded-11xl bg-color hover:bg-main border-main border-[2px] border-solid box-border flex flex-row items-start justify-between py-[21.5px] pl-[123px] pr-6 gap-5 hover:text-white cursor-pointer">
        <div className="relative tracking-[0.18em] font-semibold inline-block min-w-[58px] ">
          MORE
        </div>
        <div className="w-[19px] relative tracking-[0.18em] font-semibold inline-block ">
          →
        </div>
      </div>
    </div>
  );
};

MoreServices.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default MoreServices;
