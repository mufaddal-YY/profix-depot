import CTA from "@/components/CTA";
import PageBanner from "@/components/PageBanner";
<<<<<<< HEAD
import ProductAddOn from "@/components/Products/ProductAddOn";
=======
>>>>>>> origin/main
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
<<<<<<< HEAD
      {productDetail.contentHeadline ? (
        <ProductAddOn productDetail={productDetail} />
      ) : null}
=======
>>>>>>> origin/main
      <ProductsGrid productDetail={productDetail} />
      <CTA />
    </main>
  );
};

export default CategoryPage;
