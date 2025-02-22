"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
const ServicesSection = ({ homeData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3300,
    fade: true, // Add this to enable a smooth fade transition
    cssEase: "linear", // Use linear easing for a smoother transition
  };

  return (
    <main className="py-12 px-2 lg:px-4">
      <section className="flex flex-col justify-between md:flex-row lg:flex-row mb-8">
        <article className="p-2">
          <div className="border-l-4 border-[#3e2522] mb-4">
            <h4 className="text-md lg:text-md text-[#3e2522] capitalize font-semibold pl-4">
              Categories
            </h4>
            <h1 className="text-3xl lg:text-3xl text-gray-800 capitalize font-semibold pl-4">
              Products
            </h1>
          </div>
        </article>
      </section>

      {homeData.map((item) => (
        <section
          className="flex flex-wrap flex-col md:flex-row lg:flex-row p-1 lg:p-2"
          key={item.headline}>
          <article className="w-full lg:w-8/12 px-1 sm:px-1">
            <div className="relative w-full h-[400px] lg:h-[400px] overflow-hidden rounded-lg mb-4">
              {/* Background Image */}
              <Image
                src={item.flooringImage}
                alt={item.flooringservice}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full rounded-lg"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>

              {/* Content Box */}
              <div className="absolute inset-0 flex justify-start items-end z-20 p-6">
                <div>
                  <h1 className="text-2xl text-white leading-tight font-bold mb-2">
                    {item.flooringservice}
                  </h1>
                  <p className="text-white leading-tight text-sm font-regular mb-2">
                    {item.flooringDescription}
                  </p>
                  <Link href="/products/flooring-solutions">
                    <button className="text-md font-bold text-white flex items-center">
                      Explore <IoIosArrowForward className="ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row lg:flex-row relative gap-4 mb-4">
              {/* Bathroom Section */}
              <div className="w-full md:w-1/2 lg:w-1/2 relative h-[400px] lg:h-[280px] overflow-hidden rounded-lg">
                <Image
                  src={item.bathroomImage}
                  alt={item.bathroom}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
                <div className="absolute inset-0 flex justify-start items-end z-20 p-4">
                  <div>
                    <h1 className="text-2xl text-white leading-tight font-semibold mb-2">
                      {item.bathroom}
                    </h1>
                    <p className="text-white leading-tight text-sm font-regular mb-2">
                      {item.bathroomDescription}
                    </p>
                    <Link href="/products/bathroom-solutions">
                      <button className="text-md font-bold text-white flex items-center">
                        Explore <IoIosArrowForward className="ml-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Kitchen Section */}
              <div className="w-full md:w-1/2 lg:w-1/2 relative h-[400px] lg:h-[280px] overflow-hidden rounded-lg">
                <Image
                  src={item.kitchenImage}
                  alt={item.kitchen}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
                <div className="absolute inset-0 flex justify-start items-end z-20 p-4">
                  <div>
                    <h1 className="text-2xl text-white leading-tight font-semibold mb-2">
                      {item.kitchen}
                    </h1>
                    <p className="text-white leading-tight text-sm font-regular mb-2">
                      {item.kitchenDescription}
                    </p>
                    <Link href="/products/kitchen-solutions">
                      <button className="text-md font-bold text-white flex items-center">
                        Explore <IoIosArrowForward className="ml-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="w-full lg:w-4/12 px-1 lg:px-3">
            <div className="relative w-full h-[400px] lg:h-[700px] overflow-hidden rounded-lg">
              <Slider {...settings}>
                {item.vanitiesImage.map((data) => (
                  <div key={data.alt} className="w-full h-[400px] lg:h-[700px]">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 w-full h-full rounded-lg"
                      src={data.sliderImage}
                      alt={data.alt}
                    />{" "}
                    <div className="absolute inset-0 bg-black opacity-60 w-full h-full rounded-lg"></div>
                  </div>
                ))}
              </Slider>

              <div className="absolute inset-0 flex justify-start items-end z-20 p-4">
                <div>
                  <h1 className="lg:text-3xl text-2xl text-white leading-tight font-semibold mb-2">
                    {item.vanities}
                  </h1>
                  <p className="text-white leading-tight text-sm font-regular mb-2">
                    {item.vanitiesDescription}
                  </p>
                  <Link href={"/products/vanities"}>
                    <button className="text-md font-bold text-white flex items-center">
                      Explore <IoIosArrowForward className="ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>
      ))}
    </main>
  );
};

export default ServicesSection;
