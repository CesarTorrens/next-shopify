import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "🌟Future World🌟",
  description: "Welcome to the future world",
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
