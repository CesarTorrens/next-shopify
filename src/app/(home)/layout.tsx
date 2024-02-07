import { Hero } from "app/components/home/Hero";
import { Description } from "app/components/home/Description";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Hero />
      <Description />
      {children}
    </>
  );
};

export default HomeLayout;
