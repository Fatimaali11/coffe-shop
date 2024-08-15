import React from "react";
import Img2 from "../../assets/coffee2.png";
const MenuData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "  Espresso is a concentrated coffee brewed by forcing hot water through finely-ground coffee beans at high pressure.  ",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description:
      "An Americano is made by pouring hot water over one or two espresso shots ",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "Cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk     including a layer of milk foam ",
    aosDelay: "500",
  },
];
const Menu = () => {
  return (
    <>
      <span id="menu"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-pacifico text-gray-800">
            Best-Selling Blends

            </h1>
           
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {MenuData.map((Menu)=> (
              <div
                data-aos="fade-up"
                data-aos-delay={Menu.aosDelay}
                //className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={Menu.img}
                    alt=""
                   className="max-w-[200px] block mx-auto transform -translate-y-14
                 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{Menu.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {Menu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
