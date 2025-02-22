"use client";
import Link from "next/link";
import Logo from "@/public/logo.png";
import Image from "next/image";
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

import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

const Header = ({ productsData }) => {
  return (
    <main className="bg-white fixed w-full top-14 z-[1000] shadow-md">
      <header className="container py-3">
        <article className="flex flex-row justify-between items-center gap-4">
          <div className="flex flex-row justify-between items-center gap-4">
            <div>
              <Link href="/">
                <Image src={Logo} width={250} height={150} alt="Logo" />
              </Link>
            </div>
          </div>
          <nav className="list-none lg:flex flex-row justify-end items-center hidden">
            <Link
              href={"/"}
              className="text-md mx-2 font-semibold text-primary border border-[#fff] px-4 py-2 hover:border-[#3e2522] transition-colors duration-600 ease-in-out">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span className="text-md mx-2 cursor-pointer flex flex-row items-center gap-2 font-semibold text-primary border border-[#fff] px-4 py-2 hover:border-[#3e2522] transition-colors duration-600 ease-in-out">
                  Products <IoIosArrowDown />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                  {productsData.map((items) => (
                    <DropdownMenuSub key={items.headline}>
                      <Link
                        className="cursor-pointer"
                        href={`/products/${items.slug}`}>
                        <DropdownMenuSubTrigger>
                          <span>{items.headline}</span>
                        </DropdownMenuSubTrigger>
                      </Link>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          {items.categories.map((data) => (
                            <Link
                              key={data.categoryTitle}
                              className="cursor-pointer"
                              href={`/products/${items.slug}/${data?.categorySlug}`}>
                              <DropdownMenuItem>
                                <span>{data.categoryTitle}</span>
                              </DropdownMenuItem>
                            </Link>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href={"/gallery"}
              className="text-md mx-2 font-semibold text-primary border border-[#fff] px-4 py-2 hover:border-[#3e2522] transition-colors duration-600 ease-in-out">
              Gallery
            </Link>
            <Link
              href={"/about"}
              className="text-md mx-2 font-semibold text-primary border border-[#fff] px-4 py-2 hover:border-[#3e2522] transition-colors duration-600 ease-in-out">
              About
            </Link>
          </nav>
          <Link href={"/#cta"} className="lg:flex hidden">
            <Button
              size="lg"
              className="flex gap-2 text-white font-semibold items-center">
              Get Quote
            </Button>
          </Link>
          <div className="lg:hidden flex">
            <MobileNav productsData={productsData} />
          </div>
        </article>
      </header>
    </main>
  );
};

export default Header;
