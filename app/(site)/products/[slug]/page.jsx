import CTA from "@/components/CTA";
import PageBanner from "@/components/PageBanner";
import ProductAddOn from "@/components/Products/ProductAddOn";
import ProductInfoSection from "@/components/Products/ProductInfoSection";
import ProductRoomView from "@/components/Products/ProductRoomView";
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
      {productDetail.contentHeadline ? (
        <ProductAddOn productDetail={productDetail} />
      ) : null}

      {productDetail.liveLink ? (
        <ProductRoomView detailData={productDetail} />
      ) : null}

      <ProductsGrid productDetail={productDetail} />
      <CTA />
    </main>
  );
};

export default CategoryPage;
