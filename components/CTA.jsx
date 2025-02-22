import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import CtaBg from "@/public/ctaBg.png";
import Link from "next/link";
import EnquiryForm from "./EnquiryForm";

const CTA = () => {
  return (
    <main id="cta"
      className="py-16 relative bg-fixed"
      style={{
        backgroundImage: `url(${CtaBg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <section className="container">
        <div className="flex flex-col justify-center z-[50] py-12 px-2">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CTA;
