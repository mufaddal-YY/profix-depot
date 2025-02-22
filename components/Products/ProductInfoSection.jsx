import React from "react";
import PortableTextComponent from "../ui/PortableTextComponent";
import Image from "next/image";

const ProductInfoSection = ({ detailData }) => {
  return (
    <main className="bg-gray-100">
      <section className="container py-[50px]">
        <article className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center">
              <Image
                src={detailData.image}
                width={600}
                height={600}
                alt="Image"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <PortableTextComponent content={detailData?.content} />
            {/* <p className="mt-4">{detailData?.categoryDescription}</p> */}
          </div>
        </article>
      </section>
    </main>
  );
};

export default ProductInfoSection;
