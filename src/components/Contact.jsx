import PropTypes from "prop-types";

const Contact = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-[47px] px-[26px] pb-[45.2px] relative gap-3.5 text-center text-15xl text-color font-font ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/mask-group-1@2x.png"
        />
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray z-[1]" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[45px] pr-[51px]">
        <h1 className="m-0 flex-1 relative text-inherit tracking-[0.3em] font-medium font-[inherit] z-[2]">
          -Contact-
        </h1>
      </div>
      <div className="rounded-xl [background:linear-gradient(90deg,_#90b1eb,_#7dbeba)] flex flex-row items-start justify-start py-3 pl-[51px] pr-[11px] gap-[29px] z-[2] text-sm font-zen-kaku-gothic-new cursor-pointer">
        <div className="flex flex-col items-start justify-start pt-[15.9px] px-0 pb-0">
          <b className="relative tracking-[0.23em]">お問い合わせはこちら</b>
        </div>
        <img
          className="h-[51.8px] w-[51.8px] relative"
          loading="lazy"
          alt=""
          src="/group-23.svg"
        />
      </div>
    </section>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
