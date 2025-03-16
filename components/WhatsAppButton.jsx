import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const WhatsAppButton = ({ contactData }) => {
  return (
    <main>
      {contactData.map((item, idx) => (
        <div key={idx}>
          <Link
            target="_blank"
            href={"https://wa.link/867bth"}
            className="fixed bottom-4 cursor-pointer right-4 w-20 h-20
            rounded-full bg-[#0bd455] text-white flex items-center
            justify-center text-3xl font-bold shadow-lg z-[1021]">
            <FaWhatsapp />
          </Link>
        </div>
      ))}
    </main>
  );
};

export default WhatsAppButton;
