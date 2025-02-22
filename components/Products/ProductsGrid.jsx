import React from "react";
import ProductCard from "./ProductCard";

const ProductsGrid = ({ productDetail }) => {
  return (
    <main className="bg-white">
      <section className="container py-8">
        <div className="p-2">
          <div className="border-l-4 border-[#3e2522] mb-8">
            <h4 className="text-md lg:text-md text-[#3e2522] capitalize font-semibold pl-4">
              Categories
            </h4>
            <h1 className="text-3xl lg:text-3xl text-gray-800 capitalize font-semibold pl-4">
              Explore Solutions
            </h1>
          </div>
        </div>
        <article className="flex flex-wrap flex-row">
          {productDetail?.categories?.map((data, idx) => (
            <div className="w-full mb-2 md:w-1/2 lg:w-1/3 lg:p-2" key={idx}>
              <ProductCard
                image={data?.image}
                slug={productDetail?.slug}
                headline={data?.headline}
                categoryTitle={data?.categoryTitle}
                categorySlug={data.categorySlug}
              />
            </div>
          ))}
        </article>
      </section>
    </main>
  );
};

export default ProductsGrid;
