
import './App.css';
import SideBar from './components/SideBar/SideBar';
import Hero from './components/Hero/Hero';
import MarketSection from './components/MarketSection/MarketSection';
import Events from './components/Events/Events';
import MapAddress from './components/MapAddress/MapAddress';
import Vendor from './components/Vendor/Vendor';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="main">
        <Hero />
        <MarketSection />
        <Events />
        <MapAddress />
        <Vendor/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
