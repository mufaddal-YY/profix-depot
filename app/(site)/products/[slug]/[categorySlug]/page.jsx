import PageBanner from "@/components/PageBanner";
import ProductCategoryGallery from "@/components/Products/ProductCategoryGallery";
import ProductInfoSection from "@/components/Products/ProductInfoSection";
import { getCategoryDetailData } from "@/sanity/fetchedData";

const CategoryDetailPage = async ({ params }) => {
  const { categorySlug } = await params;

  const detailData = await getCategoryDetailData(categorySlug);

  if (!detailData || !detailData.category) {
    return <p>Category not found</p>;
  }

  const categoryDetail = detailData.category;

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
