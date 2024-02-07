import Image from "next/image";
import styles from "./MainProducts.module.sass";
import { getProducts } from "app/services/shopify/products";

export const MainProducts = async () => {
  const response = await fetch("http://localhost:3000/api");
  const products = await response.json();
  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product: any) => {
          const imageSrc = product.image;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={imageSrc}
                fill
                alt={product.title}
                loading="eager"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
