import './App.css';
import './output.css';
import './Custom.css';

 
import StickyNavbar from './pages/first page/StickyNavbar';
import Carousel from './pages/first page/Carousel';
import AboutUs from './pages/first page/AboutUs';
import WhatWeDo from './pages/first page/WhatWeDo';
import OurServers from './pages/first page/OurServers';
import Contact from './pages/first page/Contact';
import JionOur from './pages/first page/JoinOur';
import Footer from './pages/first page/Footer';
import Adoption from './pages/first page/Adoption';

function App() {
  return (
    <div className="App">
      <StickyNavbar></StickyNavbar>
      <Carousel></Carousel>
      <AboutUs></AboutUs> 
      <WhatWeDo></WhatWeDo>
       <OurServers></OurServers>
      <Adoption></Adoption>
      <Contact></Contact>
      <JionOur></JionOur>
      <Footer></Footer>
    </div>
  );
}

export default App;
