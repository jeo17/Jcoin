import Annonce from "./components/navigation/Annonce";
import NavBar from "./components/navigation/NavBar";
import Hero from "./components/Home/Hero";
import TodayBestDeals from "./components/Home/TodayBestDeals";
import Category from "./components/Home/Category";
import Products from "./components/Home/Products";
import Banner from "./components/Home/banner";
import Accessories from "./components/Home/Accessories"
function Home() {
  return (
    <>
      <Annonce />
      <NavBar />
      <div className="w-[97%] mx-[1.5%] flex flex-col  gap-[72px]">
        <Hero />
        <TodayBestDeals />
        <Category />
        <Products />
        <Banner />
        <Accessories/>
      </div>
    </>
  );
}

export default Home;
