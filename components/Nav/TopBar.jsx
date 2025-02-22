import { Button } from "../ui/button";
import { MdCall, MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const TopBar = ({ contactData }) => {
  return (
    <main className="bg-primary w-full fixed top-0 z-[1000]">
      {contactData?.map((item, idx) => (
        <section className="container p-2" key={idx}>
          <article className="flex flex-row justify-between ">
            <div className="flex flex-row ">
              <Link
                target="_blank"
                href={`
                https://api.whatsapp.com/send/?phone=%2B${item.whatsapp}&text=Hi+further&type=phone_number&app_absent=0`}>
                <Button
                  variant="secondary"
                  className="flex gap-2 text-primary font-semibold items-center">
                  <IoLogoWhatsapp className="" /> Chat with us
                </Button>
              </Link>

              <Link href={`mailto:${item.email}`}>
                <Button
                  variant="secondary"
                  className="ml-4 flex gap-2 text-primary font-semibold items-center">
                  <MdEmail /> Email us
                </Button>
              </Link>
            </div>
            <div className="hidden md:flex lg:flex">
              <Link href={`tel:${item.contact}`}>
                <Button
                  variant="secondary"
                  className="flex gap-2 text-primary font-semibold items-center">
                  <MdCall /> {item.contact}
                </Button>
              </Link>
            </div>
          </article>
        </section>
      ))}
    </main>
  );
};

export default TopBar;
