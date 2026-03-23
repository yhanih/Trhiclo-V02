import React, { useState, useEffect } from 'react';

const customStyles = {
  root: {
    '--bg-app': '#F2F4F7',
    '--surface-card': '#FFFFFF',
    '--surface-dark': '#2B2F35',
    '--accent-orange': '#F46331',
    '--accent-orange-light': '#FEEDE8',
    '--text-main': '#1A1D20',
    '--text-muted': '#8E98A4',
    '--text-inverse': '#FFFFFF',
  },
  appContainer: {
    width: '100%',
    maxWidth: '430px',
    backgroundColor: '#F2F4F7',
    position: 'relative',
    padding: '24px',
    paddingTop: '48px',
    paddingBottom: '120px',
    overflowY: 'auto',
    overflowX: 'hidden',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    minHeight: '100vh',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  avatar: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #FFFFFF',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  },
  greetingP: {
    fontSize: '13px',
    color: '#8E98A4',
    fontWeight: '400',
    margin: 0,
  },
  greetingH1: {
    fontSize: '22px',
    fontWeight: '700',
    letterSpacing: '-0.02em',
    color: '#1A1D20',
    lineHeight: '1.2',
    margin: 0,
  },
  actionPill: {
    backgroundColor: '#2B2F35',
    color: '#FFFFFF',
    padding: '10px 16px',
    borderRadius: '999px',
    fontSize: '13px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
  },
  bentoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    marginBottom: '24px',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '32px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },
  cardSpan2: {
    gridColumn: 'span 2',
  },
  cardDark: {
    backgroundColor: '#2B2F35',
    color: '#FFFFFF',
  },
  heroDialCard: {
    alignItems: 'center',
    padding: '32px 24px',
  },
  dialHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  iconWrap: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#F2F4F7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialTitleH2: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1A1D20',
    textAlign: 'center',
    margin: 0,
  },
  dialTitleP: {
    fontSize: '13px',
    color: '#8E98A4',
    textAlign: 'center',
    margin: 0,
  },
  mainDialContainer: {
    position: 'relative',
    width: '240px',
    height: '240px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transform: 'rotate(-90deg)',
  },
  dialInnerCore: {
    width: '170px',
    height: '170px',
    backgroundColor: '#2B2F35',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.5)',
  },
  dialValue: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: '-0.04em',
    lineHeight: '1',
  },
  dialLabel: {
    fontSize: '14px',
    color: '#8E98A4',
    marginTop: '4px',
    fontWeight: '500',
  },
  miniCard: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '160px',
  },
  miniCardHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  miniIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#F2F4F7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1A1D20',
  },
  miniTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#1A1D20',
    lineHeight: '1.2',
  },
  miniDialWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: 'auto',
  },
  miniSvg: {
    width: '54px',
    height: '54px',
    transform: 'rotate(-90deg)',
  },
  miniValue: {
    fontSize: '20px',
    fontWeight: '700',
    letterSpacing: '-0.02em',
  },
  aiCard: {
    gridRow: 'span 2',
    padding: '24px 20px',
    justifyContent: 'space-between',
  },
  aiBgGraphic: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '120%',
    height: '120%',
    opacity: 0.1,
    background: 'radial-gradient(circle at top right, #F46331, transparent 60%)',
    zIndex: 0,
  },
  aiContent: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  aiBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(255,255,255,0.1)',
    padding: '6px 12px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: '500',
    width: 'fit-content',
    marginBottom: '24px',
  },
  aiTitle: {
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '1.1',
    marginBottom: '8px',
    margin: 0,
  },
  aiDesc: {
    fontSize: '13px',
    color: '#A0A8B0',
    lineHeight: '1.4',
    marginBottom: 'auto',
    marginTop: '8px',
  },
  aiAction: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: '#F46331',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: '24px',
    cursor: 'pointer',
  },
  reminderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 24px',
  },
  reminderInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  reminderIconWrap: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: '#FEEDE8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#F46331',
    flexShrink: 0,
  },
  reminderTextH3: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1A1D20',
    marginBottom: '2px',
    margin: 0,
  },
  reminderTextP: {
    fontSize: '13px',
    color: '#8E98A4',
    fontWeight: '500',
    margin: 0,
  },
  sectionHeader: {
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  sectionHeaderH2: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1A1D20',
    margin: 0,
  },
  sectionHeaderA: {
    fontSize: '13px',
    color: '#8E98A4',
    fontWeight: '500',
    textDecoration: 'none',
  },
  shopScroll: {
    display: 'flex',
    gap: '16px',
    overflowX: 'auto',
    paddingBottom: '20px',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
  },
  productCard: {
    minWidth: '140px',
    background: '#FFFFFF',
    borderRadius: '24px',
    padding: '12px',
    flexShrink: 0,
  },
  productImg: {
    width: '100%',
    height: '120px',
    borderRadius: '16px',
    objectFit: 'cover',
    marginBottom: '12px',
    background: '#F2F4F7',
    display: 'block',
  },
  productInfoH4: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1A1D20',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: '4px',
    margin: 0,
  },
  productInfoP: {
    fontSize: '12px',
    color: '#8E98A4',
    margin: 0,
  },
  productBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '12px',
  },
  price: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#1A1D20',
  },
  addBtn: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: '#F2F4F7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1A1D20',
    cursor: 'pointer',
  },
  bottomNav: {
    position: 'fixed',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#FFFFFF',
    borderRadius: '999px',
    padding: '8px 12px',
    display: 'flex',
    gap: '8px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
    zIndex: 100,
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    borderRadius: '999px',
    color: '#8E98A4',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    fontFamily: 'inherit',
  },
  navItemActive: {
    backgroundColor: '#2B2F35',
    color: '#FFFFFF',
  },
};

const Toggle = ({ isOn, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      style={{
        width: '64px',
        height: '36px',
        backgroundColor: isOn ? '#F46331' : '#ccc',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isOn ? 'flex-end' : 'flex-start',
        padding: '4px',
        cursor: 'pointer',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
        transition: 'background-color 0.3s ease',
      }}
    >
      <div
        style={{
          width: '28px',
          height: '28px',
          backgroundColor: '#2B2F35',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}
      >
        <div
          style={{
            width: '2px',
            height: '12px',
            backgroundColor: '#FFFFFF',
            borderRadius: '2px',
          }}
        />
      </div>
    </div>
  );
};

const MiniCard = ({ icon, title, progressClass, value, strokeColor, dashOffset }) => {
  return (
    <div style={{ ...customStyles.card, ...customStyles.miniCard }}>
      <div style={customStyles.miniCardHeader}>
        <div style={customStyles.miniIcon}>{icon}</div>
        <div
          style={customStyles.miniTitle}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <div style={customStyles.miniDialWrap}>
        <svg style={customStyles.miniSvg} viewBox="0 0 54 54">
          <circle
            fill="none"
            stroke="#F2F4F7"
            strokeWidth="6"
            cx="27"
            cy="27"
            r="24"
          />
          <circle
            fill="none"
            stroke={strokeColor}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="150.7"
            strokeDashoffset={dashOffset}
            cx="27"
            cy="27"
            r="24"
          />
        </svg>
        <span style={customStyles.miniValue}>{value}</span>
      </div>
    </div>
  );
};

const ProductCard = ({ img, alt, name, category, price, onAdd }) => {
  return (
    <div style={customStyles.productCard}>
      <img src={img} alt={alt} style={customStyles.productImg} />
      <div>
        <h4 style={customStyles.productInfoH4}>{name}</h4>
        <p style={{ ...customStyles.productInfoP, marginTop: '4px' }}>{category}</p>
        <div style={customStyles.productBottom}>
          <span style={customStyles.price}>{price}</span>
          <div style={customStyles.addBtn} onClick={onAdd}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [reminderOn, setReminderOn] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
      * { box-sizing: border-box; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      body { font-family: 'Outfit', sans-serif; margin: 0; padding: 0; background-color: #F2F4F7; }
      .app-scroll-container::-webkit-scrollbar { display: none; }
      .shop-scroll-inner::-webkit-scrollbar { display: none; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const products = [
    {
      img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80',
      alt: 'Scalp Serum',
      name: 'Densifying Serum',
      category: 'Scalp Care',
      price: '$42',
    },
    {
      img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=300&q=80',
      alt: 'Hydration Mask',
      name: 'Moisture Mask',
      category: 'Deep Repair',
      price: '$36',
    },
    {
      img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=300&q=80',
      alt: 'Hair Oil',
      name: 'Bonding Oil',
      category: 'Split Ends',
      price: '$28',
    },
  ];

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      id: 'history',
      label: 'History',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      id: 'shop',
      label: 'Shop',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#F2F4F7',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <div
        className="app-scroll-container"
        style={customStyles.appContainer}
      >
        {/* Header */}
        <header style={customStyles.header}>
          <div style={customStyles.userProfile}>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              alt="Alina Bhart"
              style={customStyles.avatar}
            />
            <div>
              <p style={customStyles.greetingP}>Good morning!</p>
              <h1 style={customStyles.greetingH1}>Alina Bhart</h1>
            </div>
          </div>
          <div style={customStyles.actionPill}>
            Scan{' '}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </header>

        {/* Bento Grid */}
        <div style={customStyles.bentoGrid}>
          {/* Hero Dial Card */}
          <div
            style={{
              ...customStyles.card,
              ...customStyles.cardSpan2,
              ...customStyles.heroDialCard,
            }}
          >
            <div style={customStyles.dialHeader}>
              <div style={customStyles.iconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1D20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h2 style={customStyles.dialTitleH2}>Hair Moisture</h2>
                <p style={customStyles.dialTitleP}>Hydration Level</p>
              </div>
              <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8E98A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </div>
            </div>

            <div style={customStyles.mainDialContainer}>
              <svg style={customStyles.dialSvg} viewBox="0 0 240 240">
                <circle
                  fill="none"
                  stroke="#F2F4F7"
                  strokeWidth="20"
                  cx="120"
                  cy="120"
                  r="100"
                />
                <circle
                  fill="none"
                  stroke="#F46331"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeDasharray="628.3"
                  strokeDashoffset="125.7"
                  cx="120"
                  cy="120"
                  r="100"
                />
              </svg>
              <div style={customStyles.dialInnerCore}>
                <span style={customStyles.dialValue}>
                  80<span style={{ fontSize: '24px' }}>%</span>
                </span>
                <span style={customStyles.dialLabel}>Optimal</span>
              </div>
            </div>
          </div>

          {/* Hair Strength */}
          <MiniCard
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            }
            title="Hair<br/>Strength"
            value="72%"
            strokeColor="#2B2F35"
            dashOffset="42.2"
          />

          {/* Scalp Health + AI Card row */}
          {/* Scalp Health */}
          <MiniCard
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            }
            title="Scalp<br/>Health"
            value="60%"
            strokeColor="#F46331"
            dashOffset="60.2"
          />

          {/* AI Card */}
          <div
            style={{
              ...customStyles.card,
              ...customStyles.cardDark,
              ...customStyles.aiCard,
            }}
          >
            <div style={customStyles.aiBgGraphic} />
            <div style={customStyles.aiContent}>
              <div style={customStyles.aiBadge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                AI Routine
              </div>
              <div>
                <h3 style={customStyles.aiTitle}>
                  Repair &amp;<br />Hydrate
                </h3>
                <p style={customStyles.aiDesc}>
                  Your custom 3-step routine is ready based on latest scan.
                </p>
              </div>
              <div style={customStyles.aiAction}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </div>

          {/* Split Ends */}
          <MiniCard
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <line x1="20" y1="4" x2="8.12" y2="15.88" />
                <line x1="14.47" y1="14.48" x2="20" y2="20" />
                <line x1="8.12" y1="8.12" x2="12" y2="12" />
              </svg>
            }
            title="Split<br/>Ends"
            value="45%"
            strokeColor="#2B2F35"
            dashOffset="82.8"
          />

          {/* Reminder Card */}
          <div
            style={{
              ...customStyles.card,
              ...customStyles.cardSpan2,
              ...customStyles.reminderCard,
            }}
          >
            <div style={customStyles.reminderInfo}>
              <div style={customStyles.reminderIconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <div>
                <h3 style={customStyles.reminderTextH3}>Night Serum</h3>
                <p style={customStyles.reminderTextP}>9:00 PM • Daily</p>
              </div>
            </div>
            <Toggle isOn={reminderOn} onToggle={() => setReminderOn(!reminderOn)} />
          </div>
        </div>

        {/* For You Section */}
        <div style={customStyles.sectionHeader}>
          <h2 style={customStyles.sectionHeaderH2}>For You</h2>
          <a href="#" style={customStyles.sectionHeaderA}>View all</a>
        </div>

        <div
          className="shop-scroll-inner"
          style={customStyles.shopScroll}
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              img={product.img}
              alt={product.alt}
              name={product.name}
              category={product.category}
              price={product.price}
              onAdd={handleAddToCart}
            />
          ))}
        </div>

        {/* Bottom Nav */}
        <nav style={customStyles.bottomNav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              style={{
                ...customStyles.navItem,
                ...(activeNav === item.id ? customStyles.navItemActive : {}),
              }}
              onClick={() => setActiveNav(item.id)}
            >
              {item.icon}
              {activeNav === item.id && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default App;