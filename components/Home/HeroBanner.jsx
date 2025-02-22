"use client";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

const HeroBanner = ({ homeData }) => {
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
    <main className="mt-24">
      <section className="flex flex-col md:flex-row lg:flex-row items-center">
        {homeData.map((item, index) => (
          <div className="w-full" key={item.headline}>
            <div className="items-center">
              <motion.div
                initial={{ opacity: 0, y: "5%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeIn",
                  duration: 1.2,
                  delay: index * 0.9,
                }}
                className="absolute inset-0 mx-auto flex items-center justify-center z-50 p-2 mt-12">
                <div className="w-full md:w-3/4 lg:w-3/4 mx-auto text-center">
                  <h1 className="text-white font-bold text-4xl md:text-4xl lg:text-6xl py-4">
                    {item.headline}
                  </h1>
                  <p className="py-2 text-white text-lg md:text-2xl lg:text-2xl">
                    {item.subHeadline}
                  </p>
                  <Link href={"/#cta"} className="flex justify-center my-6">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="flex gap-2 text-xl py-6 px-8 text-primary font-semibold items-center">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <Slider {...settings}>
                {item.heroSlider.map((data, index) => (
                  <div
                    className="h-[750px] md:h-screen lg:h-screen relative"
                    key={index}>
                    <Image
                      className="object-cover"
                      layout="fill"
                      src={data?.sliderImage}
                      alt={data?.alt}
                    />
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HeroBanner;
