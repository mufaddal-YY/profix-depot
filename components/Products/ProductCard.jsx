import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";

const ProductCard = ({ slug, categoryTitle, categorySlug, image }) => {
  return (
    <div className="mb-2 bg-white border-2 p-1 border-white hover:border-[#3e2522] shadow-[0px_0px_10px_1px_#edf2f7]">
      <div className="w-full overflow-hidden">
        <div className="relative h-[250px] overflow-hidden">
          <Link href={`/products/${slug}/${categorySlug}`}>
            <div className="relative w-full h-[250px]">
              <Image
                className="object-cover"
                src={image}
                alt={categoryTitle}
                layout="fill"
                priority
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="">
          <div className="flex flex-row justify-between items-center">
            <div>
              <Link href={`/products/${slug}/${categorySlug}`}>
                <h4 className="font-semibold text-primary capitalize text-lg">
                  {categoryTitle}
                </h4>
              </Link>
            </div>
            <div>
              <Link href={`/products/${slug}/${categorySlug}`}>
                <Button className="-ml-3" size="sm" variant="link">
                  View <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
