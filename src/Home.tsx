import Annonce from "./components/navigation/Annonce";
import NavBar from "./components/navigation/NavBar";
import Hero from "./components/Home/Hero";
import TodayBestDeals from "./components/Home/TodayBestDeals";
function Home() {
  return (
    <div className="flex flex-col gap-[72px]">
      <header>
        <Annonce />
        <NavBar />
        <Hero />
      </header>
      <TodayBestDeals />
    </div>
  );
}

export default Home;
