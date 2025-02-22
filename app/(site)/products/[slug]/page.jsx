import CTA from "@/components/CTA";
import PageBanner from "@/components/PageBanner";
import ProductInfoSection from "@/components/Products/ProductInfoSection";
import ProductsGrid from "@/components/Products/ProductsGrid";
import { getProductsDetailData } from "@/sanity/fetchedData";

const CategoryPage = async ({ params }) => {
  const { slug } = await params; // Await params here
  const productDetail = await getProductsDetailData(slug);

  return (
    <main>
      <PageBanner
        headline={productDetail.headline}
        subHeadline={productDetail.subHeadline}
      />
      <ProductInfoSection detailData={productDetail} />
      <ProductsGrid productDetail={productDetail} />
      <CTA />
    </main>
  );
};

export default CategoryPage;
