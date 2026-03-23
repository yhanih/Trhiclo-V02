import React, { useState, useEffect } from 'react';

const customStyles = {
  glassCard: {
    background: 'linear-gradient(145deg, rgba(30, 30, 30, 0.6) 0%, rgba(15, 15, 15, 0.8) 100%)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.05)',
  },
  glassPill: {
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(226, 241, 99, 0.2)',
  },
  nodeGlow: {
    boxShadow: '0 0 20px 4px rgba(226, 241, 99, 0.3)',
  },
  scanLine: {
    background: 'linear-gradient(90deg, transparent 0%, rgba(226, 241, 99, 0.8) 50%, transparent 100%)',
    boxShadow: '0 0 15px 2px rgba(226, 241, 99, 0.4)',
  },
  whiteNodeGlow: {
    boxShadow: '0 0 8px rgba(255,255,255,0.8)',
  },
  accentNodeGlow: {
    boxShadow: '0 0 8px rgba(226,241,99,0.8)',
  },
  whiteNodeGlowLg: {
    boxShadow: '0 0 10px rgba(255,255,255,0.8)',
  },
};

const App = () => {
  const [scanning, setScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
      
      @keyframes subtle-pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.1); }
      }
      .animate-subtle-pulse {
        animation: subtle-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      .font-jakarta {
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .font-jetbrains {
        font-family: 'JetBrains Mono', monospace;
      }
      .btn-hover-overlay {
        position: absolute;
        inset: 0;
        background: rgba(255,255,255,0.2);
        transition: transform 0.3s ease-out;
      }
      .arrow-icon {
        transition: transform 0.3s ease-out;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleInitiateScan = () => {
    if (scanComplete) {
      setScanning(false);
      setScanComplete(false);
      return;
    }
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setScanComplete(true);
    }, 2500);
  };

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        backgroundColor: '#000',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '400px',
          height: '867px',
          backgroundColor: '#0A0A0A',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9)',
          borderRadius: '20px',
        }}
      >
        {/* Background Image */}
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <img
            src="https://images.unsplash.com/photo-1595085610729-f19eec8f515d?w=1000&q=85&auto=format&fit=crop"
            alt="Hair Analysis Background"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.7 }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent, #0A0A0A)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60%',
              background: 'linear-gradient(to top, #0A0A0A, rgba(10,10,10,0.8), transparent)',
            }}
          />
        </div>

        {/* Top Bar */}
        <div
          style={{
            position: 'absolute',
            top: 48,
            left: 24,
            right: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 20,
            pointerEvents: 'none',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span
              className="font-jetbrains"
              style={{
                fontSize: 9,
                letterSpacing: '0.15em',
                color: '#E2F163',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span
                className="animate-pulse"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: '#E2F163',
                  display: 'inline-block',
                }}
              />
              {scanning ? 'Scanning...' : scanComplete ? 'Scan Complete' : 'Live Scan'}
            </span>
            <span
              className="font-jetbrains"
              style={{
                fontSize: 9,
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
              }}
            >
              SYS.READY // V.2.4
            </span>
          </div>

          <button
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              pointerEvents: 'auto',
              transition: 'transform 0.1s',
            }}
            onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.95)')}
            onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <svg style={{ width: 20, height: 20, color: '#fff' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        {/* Scan Overlay */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -65%)',
            width: '100%',
            height: 400,
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          {/* Corner Frame */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 280,
              height: 280,
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: 40, height: 40, borderTop: '2px solid rgba(255,255,255,0.3)', borderLeft: '2px solid rgba(255,255,255,0.3)', borderTopLeftRadius: 24 }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: 40, height: 40, borderTop: '2px solid rgba(255,255,255,0.3)', borderRight: '2px solid rgba(255,255,255,0.3)', borderTopRightRadius: 24 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: 40, height: 40, borderBottom: '2px solid rgba(255,255,255,0.3)', borderLeft: '2px solid rgba(255,255,255,0.3)', borderBottomLeftRadius: 24 }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 40, height: 40, borderBottom: '2px solid rgba(255,255,255,0.3)', borderRight: '2px solid rgba(255,255,255,0.3)', borderBottomRightRadius: 24 }} />

            {/* Scan Line */}
            <div
              style={{
                position: 'absolute',
                top: '33.333%',
                left: '-10%',
                width: '120%',
                height: 1,
                ...customStyles.scanLine,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: 40,
                  background: 'linear-gradient(to top, rgba(226,241,99,0.1), transparent)',
                }}
              />
            </div>
          </div>

          {/* SVG Lines */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <line x1="30%" y1="35%" x2="45%" y2="55%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="45%" y1="55%" x2="70%" y2="45%" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <line x1="70%" y1="45%" x2="60%" y2="70%" stroke="rgba(226,241,99,0.4)" strokeWidth="1.5" />
          </svg>

          {/* Node 1 - White dot */}
          <div
            style={{
              position: 'absolute',
              top: '35%',
              left: '30%',
              transform: 'translate(-50%, -50%)',
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#fff',
              ...customStyles.whiteNodeGlow,
            }}
          />

          {/* Node 2 - Accent pulsing */}
          <div
            style={{
              position: 'absolute',
              top: '55%',
              left: '45%',
              transform: 'translate(-50%, -50%)',
              zIndex: 20,
            }}
          >
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div
                className="animate-subtle-pulse"
                style={{
                  position: 'absolute',
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  border: '1px solid rgba(226,241,99,0.3)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  border: '1px solid rgba(226,241,99,0.5)',
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#E2F163',
                  ...customStyles.nodeGlow,
                }}
              />
            </div>
          </div>

          {/* Node 3 - Integrity label */}
          <div
            style={{
              position: 'absolute',
              top: '45%',
              left: '70%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: '#fff',
                position: 'relative',
                zIndex: 10,
                ...customStyles.whiteNodeGlowLg,
              }}
            />
            <div
              style={{
                ...customStyles.glassPill,
                padding: '8px 16px',
                borderRadius: 999,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <svg style={{ width: 14, height: 14, color: '#E2F163' }} fill="none" viewBox="0 0 24 24" stroke="#E2F163" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span
                className="font-jakarta"
                style={{
                  color: '#fff',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {scanComplete ? 'Integrity: 94%' : scanning ? 'Analyzing...' : 'Integrity: 94%'}
              </span>
            </div>
          </div>

          {/* Node 4 - Accent small dot */}
          <div
            style={{
              position: 'absolute',
              top: '70%',
              left: '60%',
              transform: 'translate(-50%, -50%)',
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#E2F163',
              ...customStyles.accentNodeGlow,
            }}
          />
        </div>

        {/* Bottom Card */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            left: 20,
            right: 20,
            zIndex: 30,
          }}
        >
          <div
            style={{
              ...customStyles.glassCard,
              borderRadius: 32,
              padding: 28,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              boxSizing: 'border-box',
            }}
          >
            {/* Glow blob */}
            <div
              style={{
                position: 'absolute',
                top: -80,
                right: -80,
                width: 160,
                height: 160,
                backgroundColor: 'rgba(226,241,99,0.2)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }}
            />

            {/* AI Core Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div
                style={{
                  padding: '4px 12px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <svg style={{ width: 12, height: 12, color: '#fff' }} fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span
                  className="font-jakarta"
                  style={{
                    color: '#fff',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  AI Core
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="font-jakarta"
              style={{
                fontSize: 32,
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#fff',
                marginBottom: 12,
                margin: '0 0 12px 0',
              }}
            >
              {scanComplete ? (
                <>
                  Analysis<br />
                  <span style={{ background: 'linear-gradient(to right, #E2F163, #b8cc3f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    complete.
                  </span>
                </>
              ) : (
                <>
                  Discover your<br />
                  <span style={{ background: 'linear-gradient(to right, #fff, #9ca3af)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    hair's truth.
                  </span>
                </>
              )}
            </h1>

            {/* Description */}
            <p
              className="font-jakarta"
              style={{
                fontSize: 14,
                color: '#d1d5db',
                lineHeight: 1.6,
                fontWeight: 500,
                paddingRight: 16,
                marginBottom: 32,
                margin: '0 0 32px 0',
              }}
            >
              {scanComplete
                ? 'Your hair shows high integrity (94%) with moderate moisture retention. Recommend: deep conditioning treatment weekly.'
                : scanning
                ? 'Neural mapping in progress... Analyzing texture, strength, and damage patterns.'
                : 'Instantly analyze texture, strength, and hidden damage using advanced neural mapping.'}
            </p>

            {/* CTA Button */}
            <button
              onClick={handleInitiateScan}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.98)')}
              onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
              style={{
                width: '100%',
                height: 64,
                backgroundColor: '#E2F163',
                borderRadius: 999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 8px 8px 24px',
                cursor: 'pointer',
                border: 'none',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.1s',
                boxSizing: 'border-box',
              }}
            >
              {/* Hover overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(255,255,255,0.2)',
                  transform: btnHovered ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'transform 0.3s ease-out',
                }}
              />

              <span
                className="font-jakarta"
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  color: '#0A0A0A',
                  position: 'relative',
                  zIndex: 10,
                }}
              >
                {scanComplete ? 'Scan Again' : scanning ? 'Scanning...' : 'Initiate Scan'}
              </span>

              <div
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#0A0A0A',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 10,
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease-out',
                  transform: btnHovered ? 'rotate(-45deg)' : 'rotate(0deg)',
                }}
              >
                <svg style={{ width: 20, height: 20 }} fill="none" viewBox="0 0 24 24" stroke="#E2F163" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;