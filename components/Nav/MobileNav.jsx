"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import Link from "next/link";
import { AlignJustify } from "lucide-react";

const MobileNav = ({ productsData, contactData }) => {

  return (
    <Sheet >
      <SheetTrigger asChild>
        <AlignJustify className="text-primary cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="z-[1010]">
        <SheetTitle></SheetTitle>
        <div className="grid py-4 list-none ">
          <Link
            href={"/"}
            className="text-md mx-2 font-semibold text-primary border border-[#fff] px-4 py-2 hover:border-[#3e2522] transition-colors duration-600 ease-in-out">
            <SheetClose>Home</SheetClose>
          </Link>
          {productsData.map((items, idx) => (
            <DropdownMenu key={idx}>
              <DropdownMenuTrigger asChild>
                <Link href={`/products/${items.slug}`}>
                  <SheetClose>
                    <span className="text-md mx-2 cursor-pointer flex flex-row items-center gap-2 font-semibold text-primary border border-[#fff] px-4 py-2 hover:border-[#3e2522] transition-colors duration-600 ease-in-out">
                      {items.headline} <IoIosArrowDown />
                    </span>
                  </SheetClose>
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" flex flex-col w-56">
                {items.categories.map((data) => (
                  <Link
                    key={data.categoryTitle}
                    className="cursor-pointer"
                    href={`/products/${items.slug}/${data?.categorySlug}`}>
                    <SheetClose>
                      <DropdownMenuItem>
                        <span>{data.categoryTitle}</span>
                      </DropdownMenuItem>
                    </SheetClose>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}

          <Link
            href={"/gallery"}
            className="text-md mx-2 font-semibold text-primary border border-[#fff] px-4 py-2 hover:border-[#3e2522] transition-colors duration-600 ease-in-out">
            <SheetClose>Gallery</SheetClose>
          </Link>
          <Link
            href={"/about"}
            className="text-md mx-2 font-semibold text-primary border border-[#fff] px-4 py-2 hover:border-[#3e2522] transition-colors duration-600 ease-in-out">
            <SheetClose>About</SheetClose>
          </Link>
        </div>
        {contactData.map((items, idx) => (
          <div className="grid gap-4 py-4" key={idx}>
            <Link
              href={`tel:${items.contact}`}
              className="-mx-3 flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-4 text-md font-medium leading-7 text-gray-900 hover:bg-gray-50">
              <span className="text-lg text-[#3e2522]">
                <MdCall />
              </span>
              {items.contact}
            </Link>
            <Link
              href={`https://api.whatsapp.com/send/?phone=%2B${items.whatsapp}&text=Hi&type=phone_number&app_absent=0`}
              target="_blank"
              className="-mx-3 flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-4 text-md font-medium leading-7 text-gray-900 hover:bg-gray-50">
              <span className="text-lg text-[#3e2522]">
                <FaWhatsapp />
              </span>
              Whatsapp us
            </Link>
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
