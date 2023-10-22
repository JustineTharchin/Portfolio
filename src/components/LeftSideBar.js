import React, { useState } from 'react';
import '../style/LeftSidebar.css';
import Firefox from '../assets/firefox.png';
import Gmail from '../assets/gmail.png';
import Maps from '../assets/maps.png';
import Folder from '../assets/folder.png';
import PDF from '../assets/pdf.png';
import LinkedIn from '../assets/linkedin.png';

const LeftSidebar = ({ togglePDF }) => {
    const [showGmail, setShowGmail] = useState(false);
    const [showLinkedin, setShowLinkedin] = useState(false);

    const toggleGmail = () => {
      setShowGmail(!showGmail);
    };
    
    const closeGmail = () => {
        setShowGmail(false);
      };


    /*  const toggleLinkedin = () => {
        setShowLinkedin(!showLinkedin);
      };   */
      
      const closeLinkedin = () => {
          setShowLinkedin(false);
        };

      const openLinkedInChat = () => {
        window.open(
          "https://www.linkedin.com/messaging/"
        );
      };

  return (
    <div className="left-sidebar">
      <div className="icon" onClick={null}>
        <img src={Firefox} alt="firefox" />
      </div>
      <div className="icon" onClick={toggleGmail}>
        <img src={Gmail} alt="gmail" />
      </div>
      {showGmail && (
        <div className="gmail-modal">
            <div className="close-button" onClick={closeGmail}>
            <button>Fermer</button>
          </div>
          <div className="gmail-container">
            <iframe
            title="Gmail"
            src="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=justine.tharchin@gmail.com"
            width="100%"
            height="100%"
            frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
      <div className="icon" onClick={null}>
        <img src={Maps} alt="maps" />
      </div>
      <div className="icon">
        <img src={Folder} alt="Folder" />
      </div>
      <div className="icon" onClick={togglePDF}>
        <img src={PDF} alt="PDF" />
      </div>
      <div className="icon" onClick={openLinkedInChat}>
        <img src={LinkedIn} alt="LinkedIn" />
      </div>
      {showLinkedin && (
        <div className="linkedin-modal">
            <div className="close-button" onClick={closeLinkedin}>
            <button>Fermer</button>
          </div>
          <div className="linkedin-container">
            <iframe
            title="Linkedin"
            src= "https://www.linkedin.com/messaging/"
            width="100%"
            height="100%"
            frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
