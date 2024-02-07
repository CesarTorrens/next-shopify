import { shopifyUrls } from "./urls";
import { env } from "app/config/env";

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_API_KEY,
      }),
    });
    const { smart_collections } = await response.json();
    const transformedCollections = smart_collections.map((collection: collections) => {
        return {
            id: collection.id,
            title: collection.title,
            handle: collection.handle
        }
    })
    return transformedCollections;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getCollectionsProducts = async (id: number) => {
    try {
      const response = await fetch(shopifyUrls.collections.products(id), {
        headers: new Headers({
          "X-Shopify-Access-Token": env.SHOPIFY_API_KEY,
        }),
      });
      const { products } = await response.json();
     
      return products;
    } catch (error: any) {
      console.log(error.message);
    }
  };
