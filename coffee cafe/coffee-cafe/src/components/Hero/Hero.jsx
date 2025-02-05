import React from "react";
import HeroPng from "../../assets/coffee2.png";

const Hero = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-orange-700	 flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-Allura "
              >
                Experience the city's{" "}
                most luxurious coffee
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
            >
              <img
                data-aos-once="true"
                src={HeroPng}
                alt="biryani img"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin "
              />
             
             
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Hero;
