import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "FATIMA",
    text: "This espresso is simply outstanding! The rich, bold flavor is complemented by a velvety crema that makes each sip a delight. It’s strong yet smooth, providing the perfect kickstart to my day. Highly recommended for true coffee aficionados! ",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "SAWERA",
    text: " This cappuccino is a dream come true. The balance between the rich espresso and the frothy milk is just perfect. Each cup has a delightful creaminess that makes it feel like a luxurious treat. Definitely my favorite way to enjoy coffee ",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "LAIBA",
    text: " I love the Americano for its simplicity and depth. This one is well-balanced with a rich, bold flavor that’s not too overpowering. It’s the perfect choice for a long day when you need something strong but not too intense  ",
    img: "https://picsum.photos/104/104",
  },
 
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
             Coffee Reflections

          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80  font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
