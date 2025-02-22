import Image from "next/image";

const WhyUs = ({ homeData }) => {
  return (
    <main className="bg-primary">
      <section className="py-12 px-2 lg:px-4">
        <div className="flex flex-col justify-between md:flex-row lg:flex-row mb-4">
          <div className="p-2">
            <div className="border-l-4 border-white mb-4">
              <h4 className="text-md lg:text-md text-white capitalize font-semibold pl-4">
                Our Speciality
              </h4>
              <h1 className="text-2xl lg:text-3xl text-white capitalize font-semibold pl-4">
                Why Choose us
              </h1>
            </div>
          </div>
        </div>
        {homeData.map((item) => (
          <div className="flex flex-row flex-wrap" key={item.headline}>
            {item.whyChooseUs.map((data) => (
              <div className="p-2 w-1/2 lg:w-1/4" key={data.title}>
                <div className="p-4 h-[200px] bg-gray-200 border-[3px] border-white flex flex-col justify-start  ">
                  <div className="border-b-2 border-[#3e2522] p-4 w-full">
                    <Image
                      width={60}
                      height={60}
                      src={data.image}
                      alt={data.title}
                    />
                  </div>

                  <h5 className="text-left font-semibold text-md lg:text-lg text-gray-800 mt-4">
                    {data.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
};

export default WhyUs;
