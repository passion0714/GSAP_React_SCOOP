import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  propBackgroundColor,
  prop,
  propHeight,
  prop1,
}) => {
  const infrastructureCircleStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const iconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`h-[150px] flex-1 relative min-w-[97px] text-center text-lg text-main font-zen-kaku-gothic-new ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-full h-full">
        <div
          className="absolute top-[0px] left-[0px] rounded-[50%] bg-color border-color1 border-[0px] border-solid box-border w-full h-full"
          style={infrastructureCircleStyle}
        />
        <img
          className="absolute top-[28px] left-[36px] w-[77px] h-[71px] overflow-hidden z-[1]"
          loading="lazy"
          alt=""
          src={prop}
          style={iconStyle}
        />
      </div>
      <div className="absolute top-[101px] left-[21px] font-medium inline-block min-w-[108px] z-[1]">
        {prop1}
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propHeight: PropTypes.any,
};

export default GroupComponent;
