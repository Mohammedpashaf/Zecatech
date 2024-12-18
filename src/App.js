import logo from './logo.svg';
import './App.css';
import './output.css';
import './Custom.css';
import Adoption2 from './components/Second/common/Adoption2';
import Footer2 from './components/Second/common/Footer2';
import JionOur2 from './components/Second/common/JoinOur2';
import OurServers2 from './components/Second/common/OurServers2';
import Carousel2 from './components/Second/common/Carousel2';
import WeAre from './components/Second/common/WeAre';
// import Careers from './components/common/Careers';
import Adoption from './components/common/Adoption';
import StickyNavbar from './components/common/StickyNavbar';
import Carousel from './components/common/Carousel';
import AboutUs from './components/common/AboutUs';
import WhatWeDo from './components/common/WhatWeDo';
import OurServers from './components/common/OurServers';
import Contact from './components/common/Contact';
import JionOur from './components/common/JoinOur';
import Footer from './components/common/Footer';

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
      
      {/* <Carousel2></Carousel2>
      <WeAre></WeAre>
      <OurServers2></OurServers2>
      <Adoption2></Adoption2>
      <JionOur2></JionOur2>
      <Footer2></Footer2> */}
      {/* <Careers></Careers> */}
    </div>
  );
}

export default App;
