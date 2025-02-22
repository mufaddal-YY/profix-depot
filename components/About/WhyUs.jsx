import React from "react";
import PortableTextComponent from "../ui/PortableTextComponent";
import Image from "next/image";

const WhyUs = ({ aboutData }) => {
  return (
    <main className="bg-primary">
      <section className="container py-[50px]">
        {aboutData.map((item, idx) => (
          <article
            key={idx}
            className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2 p-4 text-white">
              <PortableTextComponent content={item?.whyUsSectionDescription} />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center">
                <Image
                  src={item?.whyUsSectionImage}
                  width={600}
                  height={600}
                  alt="Image"
                />
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default WhyUs;
