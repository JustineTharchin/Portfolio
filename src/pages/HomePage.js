import React, { useState } from 'react';
import '../style/HomePage.css';
import LeftSidebar from '../components/LeftSideBar';
import NavbarMenu from '../components/NavbarMenu';
import PortfolioPDF from '../assets/Porfolio_Justine_Tharchin.pdf';

function HomePage() {
  const [showPDF, setShowPDF] = useState(false);

  const togglePDF = () => {
    setShowPDF(!showPDF);
  };

  const closePDF = () => {
    setShowPDF(false);
  };

  return (
    <div className="HomePage">
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
