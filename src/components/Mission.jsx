import PropTypes from "prop-types";

const Mission = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[63px] box-border max-w-full text-center text-5xl text-color font-zen-kaku-gothic-new ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
        <h3 className="!m-[0] w-48 absolute bottom-[237px] left-[90px] text-inherit font-medium font-[inherit] inline-block z-[2]">
          <p className="m-0">「わたし」という</p>
          <p className="m-0">定義の明確化</p>
        </h3>
        <div className="flex-1 bg-dimgray flex flex-col items-start justify-start pt-[45px] px-5 pb-[54px] box-border gap-10 max-w-full text-left text-34xl font-font">
          <div className="w-[375px] h-[559px] relative bg-dimgray hidden max-w-full" />
          <div className="w-[241px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
            <div className="flex-1 flex flex-col items-start justify-start">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[0.18em] font-normal font-[inherit] z-[1]">
                Mission
              </h1>
              <div className="flex flex-row items-start justify-start py-0 px-px mt-[-5px] text-mid font-zen-kaku-gothic-new">
                <b className="relative z-[2]">私たちの大切にしていること</b>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
            <img
              className="h-[209px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/group-9@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[17px] pr-3 text-base">
            <div className="flex-1 rounded-11xl hover:bg-main hover:text-white border-main border-[1px] border-solid flex flex-row items-start justify-between py-5 pl-[122px] pr-[21px] gap-5 z-[1]">
              <div className="relative tracking-[0.18em] font-semibold inline-block min-w-[58px]">
                MORE
              </div>
              <div className="w-[19px] relative tracking-[0.18em] font-semibold inline-block">
                →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Mission.propTypes = {
  className: PropTypes.string,
};

export default Mission;
