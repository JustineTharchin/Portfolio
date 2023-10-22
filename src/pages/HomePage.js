"use strict"
import React, { useState } from 'react';
import '../style/HomePage.css';
import LeftSidebar from '../components/LeftSideBar';
import NavbarMenu from '../components/NavbarMenu';
import PortfolioPDF from '../assets/Porfolio_Justine_Tharchin.pdf';
import Video from '../assets/code.mp4';
//import SndVideo from '../assets/code.mp4';
import LogoReact from '../logo.svg';
import LogoCSS3 from '../assets/css3.png';
import LogoFigma from '../assets/figma.png';
import LogoSuiteAdobe from '../assets/adobe.png';
import { createContext } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Block from '../components/Block';

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
          <ParallaxLayer offset={0} speed={0.55}>
          <div className="blocks-container">
        <Block
          title="React.js"
          imageSrc={LogoReact}
          text="Ce site a été réalisé en React.js"
          imageAlt="React"
        />
        <Block
          title="CSS 3"
          imageSrc={LogoCSS3}
          text="Ce site a été réalisé en CSS3"
          imageAlt="CSS3"
        />
        <Block
          title="Suite Adobe"
          imageSrc={LogoSuiteAdobe}
          text="Ce site a été réalisé avec l'aide de la suite Adobe"
          imageAlt="Suite Adobe"
        />
        <Block
          title="Figma"
          imageSrc={LogoFigma}
          text="Ce site a été réalisé avec l'aide de Figma"
          imageAlt="Figma"
        />
      </div>
      </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.75}>
        <div className="texteHomepagetwo">
          <p>DESIGN UX/UI</p>
        </div>   
        </ParallaxLayer>
    </div>
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
