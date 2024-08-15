import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FV = () => {
  const images = [
    "/background1.png", // Replace with your image paths
    "/background2.png",
    "/background3.png",
  ];

  const containerRef = useRef(null);
  const textRef = useRef(null);

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

  useEffect(() => {
    const text = textRef.current;
    const textElements = text.children;

    const tl = gsap.timeline({ repeat: -1, delay: 1 }); // Create a timeline, repeat indefinitely

    Array.from(textElements).forEach((element) => {
      tl.to(element, {
        xPercent: 100, // Slide in from left to right
        duration: 2, // Duration of the slide
        ease: "power2.inOut", // Easing function
      })
      .to(element, {
        delay: 1.5, // Pause for 3 seconds
      })
      .to(element, {
        autoAlpha: 0, // Fade out
        duration: 1, // Duration of the fade out
      }); // Wait for 3 seconds after the slide in before fading out
    });
  }, []);

  return (
    <section
      className="FV relative w-full h-[100vh] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${images[2]})` }}
    >
      <div ref={containerRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute top-full left-0 w-full h-[100vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div ref={textRef}>
        <div
          key={0}
          className="absolute text-white text-5xl right-full top-[460px] w-full flex flex-col gap-[20px]"
        >
          <div className="bg-white px-4 pb-1 w-[260px]">
            <h1 className="m-0 flex-1 relative text-27xl tracking-[0.12em] font-medium font-zen-kaku-gothic-new !bg-clip-text [background:linear-gradient(90deg,_#90b1eb,_#7dbeba)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [text-shadow:0px_0px_41.77px_rgba(0,_0,_0,_0.25)]">
              中小企業の
            </h1>
          </div>
          <div className="bg-white px-4 pb-1 w-[310px]">
            <h1 className="m-0 flex-1 relative text-27xl tracking-[0.12em] font-medium font-zen-kaku-gothic-new !bg-clip-text [background:linear-gradient(90deg,_#90b1eb,_#7dbeba)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [text-shadow:0px_0px_41.77px_rgba(0,_0,_0,_0.25)]">
            成長を加速。
            </h1>
          </div>
        </div>
        <div
          key={1}
          className="absolute text-white text-5xl right-full top-[460px] w-full flex flex-col gap-[20px]"
        >
          <div className="bg-white px-4 pb-1 w-[260px]">
            <h1 className="m-0 flex-1 relative text-27xl tracking-[0.12em] font-medium font-zen-kaku-gothic-new !bg-clip-text [background:linear-gradient(90deg,_#90b1eb,_#7dbeba)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [text-shadow:0px_0px_41.77px_rgba(0,_0,_0,_0.25)]">
              中小企業の
            </h1>
          </div>
          <div className="bg-white px-4 pb-1 w-[310px]">
            <h1 className="m-0 flex-1 relative text-27xl tracking-[0.12em] font-medium font-zen-kaku-gothic-new !bg-clip-text [background:linear-gradient(90deg,_#90b1eb,_#7dbeba)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [text-shadow:0px_0px_41.77px_rgba(0,_0,_0,_0.25)]">
            成長を加速。
            </h1>
          </div>
        </div>
        <div
          key={2}
          className="absolute text-white text-5xl right-full top-[460px] w-full flex flex-col gap-[20px]"
        >
          <div className="bg-white px-4 pb-1 w-[260px]">
            <h1 className="m-0 flex-1 relative text-27xl tracking-[0.12em] font-medium font-zen-kaku-gothic-new !bg-clip-text [background:linear-gradient(90deg,_#90b1eb,_#7dbeba)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [text-shadow:0px_0px_41.77px_rgba(0,_0,_0,_0.25)]">
              中小企業の
            </h1>
          </div>
          <div className="bg-white px-4 pb-1 w-[310px]">
            <h1 className="m-0 flex-1 relative text-27xl tracking-[0.12em] font-medium font-zen-kaku-gothic-new !bg-clip-text [background:linear-gradient(90deg,_#90b1eb,_#7dbeba)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [text-shadow:0px_0px_41.77px_rgba(0,_0,_0,_0.25)]">
            成長を加速。
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FV;
