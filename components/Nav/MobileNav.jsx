"use client";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { Button } from "../ui/button";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import { AlignJustify } from "lucide-react";

const MobileNav = ({ productsData }) => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="text-primary cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle></SheetTitle>
        <div className="grid py-4 list-none mt-24">
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
        <div className="grid gap-4 py-4">
          <Link
            href={`tel:+91-1234567890`}
            className="-mx-3 flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-4 text-md font-medium leading-7 text-gray-900 hover:bg-gray-50">
            <span className="text-lg text-[#FF3C3F]">
              <MdCall />
            </span>
            +91-1234567890
          </Link>
          <Link
            href="/"
            className="-mx-3 flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-4 text-md font-medium leading-7 text-gray-900 hover:bg-gray-50">
            <span className="text-lg text-[#FF3C3F]">
              <FaWhatsapp />
            </span>
            Whatsapp us
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
