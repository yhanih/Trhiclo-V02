import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const customStyles = {
  appContainer: {
    width: '400px',
    height: '867px',
    backgroundColor: '#000',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '20px',
  },
  cameraViewport: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: "url('https://images.unsplash.com/photo-1595475241949-0d05be16556c?auto=format&fit=crop&w=800&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  scanOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanFrame: {
    width: '280px',
    height: '380px',
    position: 'relative',
    borderRadius: '32px',
    border: '2px solid rgba(255,255,255,0.5)',
    boxShadow: '0 0 0 1000px rgba(0,0,0,0.4)',
  },
  cornerTL: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    border: '4px solid #F46331',
    top: '-2px',
    left: '-2px',
    borderRight: 0,
    borderBottom: 0,
    borderRadius: '16px 0 0 0',
  },
  cornerTR: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    border: '4px solid #F46331',
    top: '-2px',
    right: '-2px',
    borderLeft: 0,
    borderBottom: 0,
    borderRadius: '0 16px 0 0',
  },
  cornerBL: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    border: '4px solid #F46331',
    bottom: '-2px',
    left: '-2px',
    borderRight: 0,
    borderTop: 0,
    borderRadius: '0 0 0 16px',
  },
  cornerBR: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    border: '4px solid #F46331',
    bottom: '-2px',
    right: '-2px',
    borderLeft: 0,
    borderTop: 0,
    borderRadius: '0 0 16px 0',
  },
  topControls: {
    position: 'absolute',
    top: '48px',
    left: 0,
    width: '100%',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  closeBtn: {
    width: '44px',
    height: '44px',
    background: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    cursor: 'pointer',
  },
  scanModePill: {
    background: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    padding: '8px 16px',
    borderRadius: '999px',
    color: 'white',
    fontSize: '13px',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    background: '#4ADE80',
    borderRadius: '50%',
    boxShadow: '0 0 8px #4ADE80',
  },
  guidanceBox: {
    position: 'absolute',
    top: '120px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    background: 'rgba(43, 47, 53, 0.85)',
    backdropFilter: 'blur(12px)',
    padding: '16px',
    borderRadius: '24px',
    textAlign: 'center',
    zIndex: 10,
  },
  guidanceText: {
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  guidanceAccent: {
    color: '#F46331',
    fontWeight: 700,
  },
  bottomControls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '32px 24px 48px 24px',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
  },
  shutterOuter: {
    width: '84px',
    height: '84px',
    borderRadius: '50%',
    border: '4px solid white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',
    cursor: 'pointer',
  },
  shutterInner: {
    width: '100%',
    height: '100%',
    background: 'white',
    borderRadius: '50%',
    transition: 'transform 0.1s',
  },
  shutterInnerActive: {
    width: '100%',
    height: '100%',
    background: 'white',
    borderRadius: '50%',
    transition: 'transform 0.1s',
    transform: 'scale(0.9)',
  },
  galleryPreview: {
    position: 'absolute',
    left: '32px',
    bottom: '60px',
    width: '52px',
    height: '52px',
    borderRadius: '16px',
    border: '2px solid white',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  flashToggle: {
    position: 'absolute',
    right: '32px',
    bottom: '60px',
    width: '52px',
    height: '52px',
    background: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    cursor: 'pointer',
  },
  zoomSelector: {
    display: 'flex',
    gap: '12px',
    background: 'rgba(0,0,0,0.5)',
    padding: '4px 12px',
    borderRadius: '999px',
    marginBottom: '8px',
  },
  zoomBtn: {
    color: 'white',
    fontSize: '11px',
    fontWeight: 600,
    padding: '6px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  zoomBtnActive: {
    color: 'white',
    fontSize: '11px',
    fontWeight: 600,
    padding: '6px 8px',
    borderRadius: '50%',
    background: '#F46331',
    cursor: 'pointer',
  },
};

const ScanLine = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
      }
      
      body {
        font-family: 'Outfit', sans-serif;
      }
      
      .scan-line-animated {
        position: absolute;
        top: 10%;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, transparent, #F46331, transparent);
        box-shadow: 0 0 15px #F46331;
        animation: scanMove 3s infinite ease-in-out;
      }

      @keyframes scanMove {
        0%, 100% { top: 10%; }
        50% { top: 90%; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return <div className="scan-line-animated" />;
};

const CameraPage = () => {
  const [activeZoom, setActiveZoom] = useState('1x');
  const [isShutterPressed, setIsShutterPressed] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const [captured, setCaptured] = useState(false);

  const handleShutter = () => {
    setIsShutterPressed(true);
    setCaptured(true);
    setTimeout(() => {
      setIsShutterPressed(false);
      setCaptured(false);
    }, 300);
  };

  const zoomLevels = ['0.5x', '1x', '2x'];

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#F2F4F7', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={customStyles.appContainer}>
        {/* Camera Viewport */}
        <div style={customStyles.cameraViewport} />

        {/* Scan Overlay */}
        <div style={customStyles.scanOverlay}>
          <div style={customStyles.scanFrame}>
            <div style={customStyles.cornerTL} />
            <div style={customStyles.cornerTR} />
            <div style={customStyles.cornerBL} />
            <div style={customStyles.cornerBR} />
            <ScanLine />
          </div>
        </div>

        {/* Top Controls */}
        <div style={customStyles.topControls}>
          <div style={customStyles.closeBtn}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div style={customStyles.scanModePill}>
            <div style={customStyles.statusDot} />
            Macro Analysis
          </div>
          <div style={customStyles.closeBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
        </div>

        {/* Guidance Box */}
        <div style={customStyles.guidanceBox}>
          <p style={customStyles.guidanceText}>
            Position the frame over your <span style={customStyles.guidanceAccent}>scalp &amp; crown</span> area. Ensure natural lighting for best results.
          </p>
        </div>

        {/* Bottom Controls */}
        <div style={customStyles.bottomControls}>
          <div style={customStyles.zoomSelector}>
            {zoomLevels.map((zoom) => (
              <div
                key={zoom}
                style={activeZoom === zoom ? customStyles.zoomBtnActive : customStyles.zoomBtn}
                onClick={() => setActiveZoom(zoom)}
              >
                {zoom}
              </div>
            ))}
          </div>

          <div style={customStyles.shutterOuter} onClick={handleShutter}>
            <div style={isShutterPressed ? customStyles.shutterInnerActive : customStyles.shutterInner} />
          </div>

          <div style={customStyles.galleryPreview}>
            <img
              src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=100&q=80"
              alt="Last scan"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div
            style={{
              ...customStyles.flashToggle,
              background: flashOn ? 'rgba(244,99,49,0.6)' : 'rgba(255,255,255,0.2)',
            }}
            onClick={() => setFlashOn(!flashOn)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
        </div>

        {/* Capture Flash Effect */}
        {captured && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(255,255,255,0.4)',
              zIndex: 20,
              pointerEvents: 'none',
            }}
          />
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<CameraPage />} />
      </Routes>
    </Router>
  );
};

export default App;