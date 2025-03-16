import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { IoIosPhonePortrait } from "react-icons/io";

const ProductRoomView = ({ detailData }) => {
  return (
    <main className="bg-primary">
      <section className="container py-[50px]">
        <article className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full">
            <div className="flex">
              <h4 className="text-2xl lg:text-3xl text-white font-semibold">
                See products in your room
              </h4>
            </div>
          </div>
          <div className="w-full flex justify-end p-4">
            <div>
              <Link href={detailData.liveLink} target="_blank">
                <Button size="lg" variant="secondary">
                  Click here <IoIosPhonePortrait />{" "}
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ProductRoomView;
