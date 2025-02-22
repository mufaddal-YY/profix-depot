import AboutSection from "@/components/Home/AboutSection";
import HeroBanner from "@/components/Home/HeroBanner";
import ServicesSection from "@/components/Home/ServicesSection";
import { getGalleryData, getHomeData } from "@/sanity/fetchedData";
import AboutBg from "@/public/aboutBg.png";
import WhyUs from "@/components/Home/WhyUs";
import GallerySection from "@/components/Home/GallerySection";
import CTA from "@/components/CTA";
export default async function Home() {
  const homeData = await getHomeData();
  const galleryData = await getGalleryData();

  return (
    <main>
      <HeroBanner homeData={homeData} />
      <ServicesSection homeData={homeData} />
      <section
        className="py-10 relative bg-fixed"
        style={{
          backgroundImage: `url(${AboutBg.src})`,
          backgroundSize: "contain%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
        <AboutSection homeData={homeData} />
      </section>
      <WhyUs homeData={homeData} />
      <GallerySection galleryData={galleryData} />
      <CTA />
    </main>
  );
}
