import Hero from "@/components/hero";
import Promotion from "@/components/promotion";
import Services from "@/components/services";
import Categories from "@/components/categories";
import TopSelling from "@/components/topSelling";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Promotion/>
      <Categories/>
      <TopSelling/>
    </div>
  );
}
