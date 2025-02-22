import Image from "next/image";
import React from "react";
import PortableTextComponent from "../ui/PortableTextComponent";

const DifferenceSection = ({ aboutData }) => {
  return (
    <main className="bg-gray-100">
      <section className="container py-[50px]">
        {aboutData.map((item, idx) => (
          <article
            key={idx}
            className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center">
                <Image
                  src={item?.differenceImage}
                  width={600}
                  height={600}
                  alt="Image"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <PortableTextComponent content={item?.differenceDescription} />
              {/* <p className="mt-4">{detailData?.categoryDescription}</p> */}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default DifferenceSection;
