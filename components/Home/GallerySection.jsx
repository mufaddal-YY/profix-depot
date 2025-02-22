"use client";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const GallerySection = ({ galleryData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    loop: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="bg-gray-50">
      <section className="py-12 px-2 lg:px-4">
        <div className="flex flex-col justify-between md:flex-row lg:flex-row mb-4">
          <div className="p-2">
            <div className="border-l-4 border-[#3e2522] mb-4">
              <h4 className="text-md lg:text-md text-[#3e2522] capitalize font-semibold pl-4">
                Gallery
              </h4>
              <h1 className="text-3xl lg:text-3xl text-gray-800 capitalize font-semibold pl-4">
                Recent work
              </h1>
            </div>
          </div>
          <div className="p-2">
            <Link href="/clientele">
              <Button className="flex items-center text-white text-sm font-semibold  bg-primary">
                View All
                <span className="pl-2 font-bold">
                  <BsArrowRight />
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {galleryData.map((item, idx) => (
          <div className="py-6" key={idx}>
            <Slider {...settings} className="">
              {item.images.map((data, index) => (
                <div className="flex p-2" key={index}>
                  <div className="relative w-full h-[600px] lg:h-[500px] p-2 border border-[#3e2522] flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <Image
                      src={data?.image}
                      alt={data?.imageTitle}
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0"
                    />

                    {/* Overlay for better readability */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Image Title at the bottom with white background */}
                    {/* <div className="absolute bottom-0 left-0 w-full bg-white text-center py-2">
                      <p className="text-sm font-semibold text-[#3e2522]">
                        {data?.imageTitle}
                      </p>
                    </div> */}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </section>
    </main>
  );
};

export default GallerySection;
