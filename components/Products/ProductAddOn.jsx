import Image from "next/image";
import React from "react";

const ProductAddOn = ({ productDetail }) => {
  return (
    <main className="bg-white ">
      <section className="container py-[50px]">
        <article>
          <div className="my-4">
            <h4 className="text-center font-semibold text-2xl">
              {productDetail?.contentHeadline}
            </h4>
          </div>
          <div className="py-4 flex justify-center">
            <Image
              src={productDetail?.additionalImage}
              width={1080}
              height={600}
              alt={productDetail?.contentHeadline}
            />
          </div>
        </article>
      </section>
    </main>
  );
};

export default ProductAddOn;
