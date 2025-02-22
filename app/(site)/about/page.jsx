import AboutSection from "@/components/About/AboutSection";
import DifferenceSection from "@/components/About/DifferenceSection";
import WhyUs from "@/components/About/WhyUs";
import CTA from "@/components/CTA";
import PageBanner from "@/components/PageBanner";
import { getAboutData } from "@/sanity/fetchedData";

const AboutPage = async () => {
  const aboutData = await getAboutData();
  return (
    <main>
      {aboutData.map((item, idx) => (
        <div key={idx}>
          <PageBanner headline={"Profix Depot"} subHeadline={item.headline} />
        </div>
      ))}
      <AboutSection aboutData={aboutData} />
      <WhyUs aboutData={aboutData} />
      <DifferenceSection aboutData={aboutData} />
      <CTA />
    </main>
  );
};

export default AboutPage;
