"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";

const Footer = ({ productsData, contactData }) => {
  return (
    <section className="py-4 bg-white">
      <div className="">
        <div className="flex flex-wrap flex-col justify-between md:flex-row lg:flex-row p-4">
          <div className=" flex flex-col gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="">
              <Link href={"/"} className="flex items-center">
                <Image width={250} height={50} src={Logo} alt="footer logo" />
              </Link>
            </div>
            {/* <div className="py-2">
              <ul className="flex flex-row gap-4">
                <li className="text-sm p-2">
                  Embark on a global culinary journey with our exceptional
                  wholesale food exports. Our reach spans the entire globe,
                  ensuring that our superior products reach every corner.
                </li>
              </ul>
            </div> */}
          </div>
          <div className="flex flex-col gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="mb-2 border-b-[1px] border-gray-400">
              <h3 className="text-[18px] uppercase md:text-md font-semibold mb-4">
                Useful Links
              </h3>
            </div>
            <div className="py-2">
              <ul className="flex flex-col gap-4 text-sm">
                <li className="text-md capitalize">
                  <Link href={"/about"}>About</Link>
                </li>
                <li className="text-md capitalize">
                  <Link href={"/gallery"}>Gallery</Link>
                </li>
                {productsData.map((item) => (
                  <li className="text-md capitalize" key={item.headline}>
                    <Link href={`/products/${item.slug}`}>{item.headline}</Link>
                  </li>
                ))}
                <li className="text-md capitalize">
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="mb-2 border-b-[1px] border-gray-400">
              <h3 className="text-[18px] uppercase md:text-md font-semibold mb-4">
                Contact Information
              </h3>
            </div>
            <div className="py-2">
              {contactData.map((item, idx) => (
                <ul className="flex flex-col gap-4 text-sm" key={idx}>
                  <li className="text-md capitalize flex gap-2">
                    <span className="text-xl text-[#3e2522]">
                      <MdLocationOn />
                    </span>
                    {item.address}
                  </li>
                  <li className="text-md capitalize">
                    <Link href={`tel:${item.contact}`} className="flex gap-2">
                      <span className="text-xl text-[#3e2522]">
                        <MdCall />
                      </span>
                      Call us: {item.contact}
                    </Link>
                  </li>
                  <li className="text-md">
                    <Link href={`mailto:${item.email}`} className="flex gap-2">
                      <span className="text-xl text-[#3e2522]">
                        <MdEmail />
                      </span>
                      Email us: {item.email}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.5575688071085!2d-81.17089708782053!3d42.987592671021204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef2aa1133b6bb%3A0x690293209425c081!2s7%20Charterhouse%20Crescent%2C%20London%2C%20ON%20N5W%205V3%2C%20Canada!5e0!3m2!1sen!2sin!4v1740226453277!5m2!1sen!2sin"
              width="300"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <hr />
        <div className="py-2 text-center font-regular items-center text-md text-primary">
          <span>
            © 2025 Profix Depot | Home Imrovement Store. All Rights Reserved. |{" "}
            <Link href={"/return-policy"}>Return Policy</Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
