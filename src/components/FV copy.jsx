import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FV = () => {
  const images = [
    "/background1.png", // Replace with your image paths
    "/background2.png",
    "/background3.png",
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageElements = container.children;

    gsap.to(imageElements, {
      yPercent: -100, // Moves the images from bottom to top
      duration: 2, // Adjust duration for smoothness
      stagger: 5, // Time between the start of each animation
      repeat: -1, // Infinite loop
      ease: "power2.inOut", // Smooth easing
      repeatDelay: 3, // Delay between repeats
    });
  }, []);

  return (
    <section className="FV">
      <section className="w-[277.8px] flex flex-row items-start justify-start pt-0 px-[18px] pb-[24.6px] box-border text-left text-20xl font-zen-kaku-gothic-new">
        <div className="flex-1 bg-color flex flex-row items-start justify-start py-0 px-[13px] z-[1]">
          <h1 className="m-0 h-14 flex-1 relative text-inherit tracking-[0.12em] font-medium font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#90b1eb,_#7dbeba)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [text-shadow:0px_0px_41.77px_rgba(0,_0,_0,_0.25)]">
            中小企業の
          </h1>
        </div>
      </section>
      <div className="ml-[-4px] mb-[66px] w-[285.8px] bg-color flex flex-row items-start justify-start py-0 px-[13px] box-border z-[1]">
        <h1 className="m-0 h-14 flex-1 relative text-inherit tracking-[0.12em] font-medium font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#90b1eb,_#7dbeba)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [text-shadow:0px_0px_41.77px_rgba(0,_0,_0,_0.25)]">
          成長を加速。
        </h1>
      </div>
      <section
        ref={containerRef}
        style={{ backgroundImage: `url(${images[2]})` }}
        className="w-full h-[782px] !m-[0] top-[1px] right-[0px] left-[0px]"
      >
        {images.map((image, index) => (
          <img key={index} alt="" src={`${image}`} className="abolute" />
        ))}
      </section>
      <img
        className="absolute top-[754px] left-[188px] w-[3px] h-7 z-[1]"
        loading="lazy"
        alt=""
        src="/group-18.svg"
      />
      <img
        className="w-[163px] h-[163px] absolute !m-[0] top-[826.8px] left-[-56.5px] z-[1]"
        loading="lazy"
        alt=""
        src="/ellipse-3.svg"
      />

      
<div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[23px] pl-[21px] pr-2 text-14xl text-color">
          <h1 className="m-0 h-24 relative text-inherit tracking-[0.18em] font-normal font-[inherit] inline-block z-[1]">
            <p className="m-0">small business　</p>
            <p className="m-0">accelerate growth</p>
          </h1>
        </div>
    </section>
  );
};

export default FV;
