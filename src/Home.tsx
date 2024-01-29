import Annonce from "./components/navigation/Annonce";
import NavBar from "./components/navigation/NavBar";
import Hero from "./components/Home/Hero";
import TodayBestDeals from "./components/Home/TodayBestDeals";
import Category from "./components/Home/Category";
import Products from "./components/Home/Products";
import Banner from "./components/Home/banner";
import Accessories from "./components/Home/Accessories";
import Banner2 from "./components/Home/Banner2";
import TrendProducts from "./components/Home/TrendProducts";
import { LatestNews } from "./components/Home/LatestNews";

function Home() {
  return (
    <>
      <Annonce />
      <NavBar />
      <div className="w-[97%] mx-[1.5%] flex flex-col  gap-[72px] mb-[72px]">
        <Hero />
        <TodayBestDeals />
        <Category />
        <Products />
        <Banner />
        <Accessories />
      </div>

      <div className="flex flex-col gap-[72px]">
        <Banner2 />
        <TrendProducts />
        <LatestNews />
      </div>
    </>
  );
}

export default Home;
