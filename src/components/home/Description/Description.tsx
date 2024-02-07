import styles from "./Description.module.sass";
import Image from "next/image";
import { blurImage } from "./blurData";

export const Description = () => {
  return (
    <section className={styles.Description}>
      <div className={styles.Description__imageContainer}>
        <Image
          placeholder="blur"
          blurDataURL={blurImage}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src="/images/img-next.jpeg"
          alt="imagen de tienda"
        />
      </div>
      <div className={styles.Description__text}>
        <h2>Descripción</h2>
        <p>
          Future World: Your Gateway to Tomorrows Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
