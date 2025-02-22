import GallerySections from "@/components/Gallery/GallerySections";
import PageBanner from "@/components/PageBanner";
import { getGalleryData } from "@/sanity/fetchedData";

const GalleryPage = async () => {
  const galleryData = await getGalleryData();
  return (
    <main>
      <PageBanner headline={"Gallery"} subHeadline={"Exlore our work"} />
      <GallerySections galleryData={galleryData} />
    </main>
  );
};

export default GalleryPage;
