import React from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { IoIosPhonePortrait } from "react-icons/io";

const ProductCategoryGallery = ({ detailData }) => {

  return (
    <main className="bg-white">
      <section className="container py-8">
        {/* <div className="p-2">
          <div className="border-l-4 border-[#3e2522] mb-8">
            <h4 className="text-md lg:text-md text-[#3e2522] capitalize font-semibold pl-4">
              Gallery
            </h4>
            <h1 className="text-3xl lg:text-3xl text-gray-800 capitalize font-semibold pl-4">
              Our Work
            </h1>
          </div>
        </div> */}
        <article className="flex flex-wrap flex-row">
          {detailData?.images?.map((data, idx) => (
            <div className="w-full mb-2 md:w-1/2 lg:w-1/3 lg:p-2" key={idx}>
              <div className="mb-2 bg-white border-2 p-1 border-white hover:border-[#3e2522] shadow-[0px_0px_10px_1px_#edf2f7]">
                <div className="w-full overflow-hidden">
                  <div className="relative h-[250px] overflow-hidden">
                    <div className="relative w-full h-[350px]">
                      <Image
                        className="object-cover"
                        src={data?.image}
                        alt={data?.imageTitle}
                        layout="fill"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="px-4 py-2">
                  <div className="">
                    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-primary capitalize text-lg my-2">
                          {data?.imageTitle}
                        </h4>
                      </div>
                      {detailData?.liveLink ? (
                        <div>
                          <Link href={detailData.liveLink} target="_blank">
                            <Button>
                              See it in room <IoIosPhonePortrait />{" "}
                            </Button>
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
};

export default ProductCategoryGallery;
