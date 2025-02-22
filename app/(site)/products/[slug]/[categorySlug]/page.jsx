import PageBanner from "@/components/PageBanner";
import ProductCategoryGallery from "@/components/Products/ProductCategoryGallery";
import ProductInfoSection from "@/components/Products/ProductInfoSection";
import { getCategoryDetailData } from "@/sanity/fetchedData";

const CategoryDetailPage = async ({ params }) => {
  console.log("Params received:", params);

  const { categorySlug } = await params;
  console.log("Fetching data for:", categorySlug);

  const detailData = await getCategoryDetailData(categorySlug);

  if (!detailData || !detailData.category) {
    return <p>Category not found</p>;
  }

  const categoryDetail = detailData.category;
  console.log(categoryDetail);

  return (
    <main>
      <PageBanner
        headline={categoryDetail.categoryTitle}
        subHeadline={categoryDetail.categoryDescription}
      />
      <ProductCategoryGallery detailData={categoryDetail} />
    </main>
  );
};

export default CategoryDetailPage;
