import React from "react";
import PortableTextComponent from "../ui/PortableTextComponent";

const AboutSection = ({ homeData }) => {
  return (
    <div className="py-8 px-2 lg:px-4">
      <div className="p-2">
        <div className="border-l-4 border-[#3e2522] mb-8">
          <h4 className="text-md lg:text-md text-[#3e2522] capitalize font-semibold pl-4">
            Get to Know us
          </h4>
          <h1 className="text-3xl lg:text-3xl text-gray-800 capitalize font-semibold pl-4">
            Who we are?
          </h1>
        </div>
      </div>
      <div className="p-2">
        {homeData.map((item, idx) => (
          <div
            className="text-md lg:text-lg text-gray-800 font-regular"
            key={idx}>
            <PortableTextComponent
              content={item.whoWeAre}
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                li: ({ children }) => (
                  <li className="special-list-item">{children}</li>
                ),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
