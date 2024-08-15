const Blog = ({ className = "" }) => {
  return (
    <>
      <div className="flex flex-row items-start justify-start pt-0 px-[22px] pb-[125px] text-34xl font-font">
        <div className="flex flex-row items-start justify-start relative">
          <h1 className="m-0 relative text-inherit tracking-[0.18em] font-normal font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#90b1eb,_#7dbeba)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[2]">
            Blog
          </h1>
          <div className="h-[329px] w-[356px] absolute !m-[0] right-[-205px] bottom-[-256px]">
            <div className="absolute top-[0px] left-[263px] bg-gray w-[93px] h-[89px]" />
            <div className="absolute top-[37px] left-[0px] bg-palegoldenrod w-[306px] h-[292px] z-[1]" />
            <img
              className="absolute top-[111px] left-[19px] w-[335px] h-[209px] object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/group-2896@2x.png"
            />
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[135px] pl-[26px] pr-5 text-left text-5xl text-color font-font">
        <h3 className="m-0 relative text-inherit tracking-[0.11em] font-normal font-[inherit] z-[3]">
          Coming Soon
        </h3>
      </section>
    </>
  );
};

export default Blog;
