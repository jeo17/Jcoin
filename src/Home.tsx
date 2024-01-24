import Annonce from "./components/navigation/Annonce";
import NavBar from "./components/navigation/NavBar";
import Hero from "./components/Hero";
import TodayBestDeals from "./components/TodayBestDeals";
function Home() {
  return <>
  <header>
   <Annonce/>
   <NavBar/>
   <Hero/>
  </header>
<TodayBestDeals />
    </>;
}

export default Home;
