import { groq } from "next-sanity";
import { client } from "./lib/client";

const defaultFetchOptions = { cache: "no-cache" };

export async function getHomeData() {
  const result = await client.fetch(
    groq`*[_type == "home"]{
         _id,
          _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         subHeadline,
         heroSlider[]{
         alt,
         "sliderImage": sliderImage.asset->url,
         },
         flooringservice,
         flooringDescription,
         "flooringImage": flooringImage.asset->url,
         vanities,
         vanitiesDescription,
         vanitiesImage[]{
         alt,
         "sliderImage": sliderImage.asset->url,
         },
         bathroom,
         bathroomDescription,
         "bathroomImage": bathroomImage.asset->url,
         kitchen,
         kitchenDescription,
         "kitchenImage": kitchenImage.asset->url,
         whoWeAre,
         whyChooseUs[]{
         title,
         "image": image.asset->url,
         },
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getProductsData() {
  const result = await client.fetch(
    groq`*[_type == "products"]{
         _id,
         _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         "slug": slug.current,
         subHeadline,
         "image": image.asset->url,
         categories[]{
         categoryTitle,
         "categorySlug": categorySlug.current,
         "image": image.asset->url,
         }       
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getProductsDetailData(slug) {
  return client.fetch(
    groq`
    *[_type == "products" && slug.current == $slug][0]{
        _id,
         _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         "slug": slug.current,
         subHeadline,
         content,
         "image": image.asset->url,
         categories[]{
         categoryTitle,
         "categorySlug": categorySlug.current,
         categoryDescription,
         "image": image.asset->url,
         content,
         images[]{
         imageTitle,
         "image": image.asset->url,
         },
         } 
        }`,
    { slug, defaultFetchOptions }
  );
}

export async function getCategoryDetailData(categorySlug) {
  return client.fetch(
    groq`
      *[_type == "products" && categories[].categorySlug.current match $categorySlug][0] {
        "category": categories[categorySlug.current == $categorySlug][0] {
          categoryTitle,
          "categorySlug": categorySlug.current,
          categoryDescription,
          "image": image.asset->url,
          content,
          images[]{
            imageTitle,
            "image": image.asset->url
          }
        }
      }
    `,
    { categorySlug }
  );
}

export async function getAboutData() {
  const result = await client.fetch(
    groq`*[_type == "about"]{
         _id,
         _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         content,
         "sectionImage": sectionImage.asset->url,
         "whyUsSectionImage": whyUsSectionImage.asset->url,
         whyUsSectionDescription,
         "differenceImage": differenceImage.asset->url,
         differenceDescription,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getTestimonialsData() {
  const result = await client.fetch(
    groq`*[_type == "testimonials"]{
         _id,
         _createdAt,
         customerName,
         review,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getGalleryData() {
  const result = await client.fetch(
    groq`*[_type == "gallery"]{
         _id,
         _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         images[]{
         imageTitle,
          "image": image.asset->url,
         },
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getPolicyData() {
  const result = await client.fetch(
    groq`*[_type == "returnPolicy"]{
         _id,
         _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         content,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getContactData() {
  const result = await client.fetch(
    groq`*[_type == "contact"]{
         _id,
         _createdAt,
        email,
        contact,
        whatsapp,
        address,
        instagram,
        facebook,
        youtube,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}
