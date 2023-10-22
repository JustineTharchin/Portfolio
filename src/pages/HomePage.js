"use strict"
import React, { useState } from 'react';
import '../style/HomePage.css';
import LeftSidebar from '../components/LeftSideBar';
import NavbarMenu from '../components/NavbarMenu';
import PortfolioPDF from '../assets/Porfolio_Justine_Tharchin.pdf';
import Video from '../assets/architecture.mp4';
import SndVideo from '../assets/code.mp4';
import VideoMouse from '../assets/computer.png';
import LogoReact from '../logo.svg';
import { createContext } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
//import Cards from '../components/Cards';

function HomePage() {
  const [showPDF, setShowPDF] = useState(false);

  const togglePDF = () => {
    setShowPDF(!showPDF);
  };

  const closePDF = () => {
    setShowPDF(false);
  };

  const Context = createContext();

  return (
    <div className="HomePage">
       <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
      <ParallaxLayer offset={0} speed={0.25}>
        <video className="animation_layer parallax" id="artback" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
      </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
        <div className="bubble">
          <p className="bubble-text">Bienvenue dans mon portfolio,
           Je suis Justine, Intégratrice web</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.1}>
        <div className="animation_layer parallax" id="logoland">
          <p>PORTFOLIO</p>
        </div>
      </ParallaxLayer>
      <div className="texteHomepage">
          <p>DEVELOPPEMENT WEB</p>
          <ParallaxLayer offset={0} speed={0.55}>
        <video className="animation_layer parallax" id="sndSlide" autoPlay loop muted>
            <source src={SndVideo} type="video/mp4" />
          </video>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.55}>
        <img className="animation_layer parallax" id="computer" src={VideoMouse} /> 
        <div className="logo">
          <img src={LogoReact} alt="React Logo" />
        </div>       
      </ParallaxLayer>
      <div className="bubble-two">
          <p className="bubble-text-two">Cliquez sur l'icône PDF pour ouvrir mon CV</p>
      </div>
    </div>
    <ParallaxLayer offset={0} speed={0.75}>
    <div className="texteHomepagetwo">
      <p>DESIGN UX/UI</p>
    </div>   
      </ParallaxLayer>
    </Parallax>
      <NavbarMenu />
      <LeftSidebar togglePDF={togglePDF} />
      {showPDF && (
        <div className="pdf-modal">
          <div className="close-button" onClick={closePDF}>
            <button>Fermer</button>
          </div>
          <div className="pdf-container">
            <div className="center-pdf">
              <embed
                src={PortfolioPDF}
                type="application/pdf"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
