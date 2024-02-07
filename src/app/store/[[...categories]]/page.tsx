import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify/products";
import { getCollectionsProducts } from "app/services/shopify/collections";
import { getCollections } from "app/services/shopify/collections";

type CategoryProps = {
  params: {
    categories: string[];
  };
  searchParams: {};
};

const Category = async (props: CategoryProps) => {
  const { categories } = props.params;
  let products = [];
  const collections = await getCollections();

  if (categories) {
    const collectionId = collections.find(
      (collection: collections) => collection.handle === categories[0]
    )?.id;
    products = await getCollectionsProducts(collectionId);
  } else {
    products = await getProducts();
  }
  return <ProductsWrapper products={products} />;
};

export default Category;
