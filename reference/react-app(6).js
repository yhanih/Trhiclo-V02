import React, { useState, useEffect } from 'react';

const customStyles = {
  appContainer: {
    width: '400px',
    height: '867px',
    backgroundColor: '#F2F4F7',
    position: 'relative',
    padding: '24px',
    paddingTop: '48px',
    paddingBottom: '120px',
    overflowY: 'auto',
    borderRadius: '20px',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  routineSummary: {
    backgroundColor: '#2B2F35',
    borderRadius: '32px',
    padding: '24px',
    color: '#FFFFFF',
    marginBottom: '24px',
    position: 'relative',
    overflow: 'hidden',
  },
  summaryBadge: {
    background: 'rgba(255,255,255,0.1)',
    padding: '6px 12px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '16px',
  },
  summaryTitle: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '12px',
    lineHeight: '1.1',
  },
  progressContainer: {
    marginTop: '24px',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    marginBottom: '8px',
    fontWeight: '500',
  },
  progressBarBg: {
    height: '6px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '3px',
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    background: '#F46331',
    borderRadius: '3px',
  },
  stepCard: {
    background: '#FFFFFF',
    borderRadius: '32px',
    padding: '20px',
    display: 'flex',
    gap: '16px',
    position: 'relative',
  },
  stepNumberCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  stepCircle: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#F2F4F7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '14px',
    color: '#1A1D20',
    flexShrink: 0,
  },
  stepCircleActive: {
    background: '#F46331',
    color: '#fff',
  },
  stepCircleDone: {
    background: '#2B2F35',
    color: '#fff',
  },
  stepLine: {
    width: '2px',
    flexGrow: 1,
    background: '#F2F4F7',
    borderRadius: '1px',
    minHeight: '20px',
  },
  stepContent: {
    flexGrow: 1,
  },
  stepTime: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#F46331',
    textTransform: 'uppercase',
  },
  stepTimeInactive: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#8E98A4',
    textTransform: 'uppercase',
  },
  stepTitle: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#1A1D20',
  },
  productMiniCard: {
    background: '#F2F4F7',
    borderRadius: '16px',
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: '12px',
  },
  productMiniImg: {
    width: '48px',
    height: '48px',
    borderRadius: '10px',
    background: '#fff',
    objectFit: 'cover',
    flexShrink: 0,
  },
  stepInstruction: {
    fontSize: '14px',
    color: '#8E98A4',
    lineHeight: '1.5',
    marginTop: '12px',
  },
  checkBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#F2F4F7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1A1D20',
    alignSelf: 'flex-start',
    flexShrink: 0,
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
  },
  checkBtnChecked: {
    background: '#F46331',
    color: '#fff',
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
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    outline: 'none',
  },
  navItemActive: {
    backgroundColor: '#2B2F35',
    color: '#FFFFFF',
  },
  backBtn: {
    width: '44px',
    height: '44px',
    background: '#FFFFFF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1A1D20',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    flexShrink: 0,
  },
};

const steps = [
  {
    id: 1,
    time: '8:00 AM',
    title: 'Cleanse & Prime',
    instruction: 'Wash with lukewarm water to open follicles. Massage scalp for 2 mins.',
    product: {
      name: 'Scalp Primer',
      type: 'Pre-wash Treatment',
      img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=100&q=80',
    },
  },
  {
    id: 2,
    time: '2:00 PM',
    title: 'Mid-day Hydrate',
    instruction: 'Apply 2-3 drops to mid-lengths and ends. Do not rinse.',
    product: {
      name: 'Bonding Oil',
      type: 'Daily Hydration',
      img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=100&q=80',
    },
    active: true,
  },
  {
    id: 3,
    time: '9:00 PM',
    title: 'Night Recovery',
    instruction: 'Deep scalp massage with serum before sleep. Focus on thinning areas.',
    product: {
      name: 'Densifying Serum',
      type: 'Overnight Repair',
      img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=100&q=80',
    },
  },
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const StepCard = ({ step, index, isCompleted, isActive, isLast, onToggle }) => {
  const circleStyle = {
    ...customStyles.stepCircle,
    ...(isCompleted ? customStyles.stepCircleDone : {}),
    ...(isActive && !isCompleted ? customStyles.stepCircleActive : {}),
  };

  const cardStyle = {
    ...customStyles.stepCard,
    ...(isCompleted ? { opacity: 0.6 } : {}),
  };

  const checkStyle = {
    ...customStyles.checkBtn,
    ...(isCompleted ? customStyles.checkBtnChecked : {}),
  };

  const timeStyle = index === 2 ? customStyles.stepTimeInactive : customStyles.stepTime;

  return (
    <div style={cardStyle}>
      <div style={customStyles.stepNumberCol}>
        <div style={circleStyle}>
          {isCompleted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            step.id
          )}
        </div>
        {!isLast && <div style={customStyles.stepLine} />}
      </div>
      <div style={customStyles.stepContent}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span style={timeStyle}>{step.time}</span>
        </div>
        <h3 style={customStyles.stepTitle}>{step.title}</h3>
        <p style={customStyles.stepInstruction}>{step.instruction}</p>
        <div style={customStyles.productMiniCard}>
          <img
            src={step.product.img}
            style={customStyles.productMiniImg}
            alt={step.product.name}
          />
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1A1D20' }}>{step.product.name}</h4>
            <p style={{ fontSize: '12px', color: '#8E98A4' }}>{step.product.type}</p>
          </div>
        </div>
      </div>
      <button style={checkStyle} onClick={() => onToggle(step.id)}>
        <CheckIcon />
      </button>
    </div>
  );
};

const App = () => {
  const [completedSteps, setCompletedSteps] = useState([1]);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
      * { margin: 0; padding: 0; box-sizing: border-box; -webkit-font-smoothing: antialiased; }
      body { font-family: 'Outfit', sans-serif; background-color: #F2F4F7; display: flex; justify-content: center; min-height: 100vh; }
      .app-scroll::-webkit-scrollbar { display: none; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleToggle = (stepId) => {
    setCompletedSteps((prev) =>
      prev.includes(stepId) ? prev.filter((id) => id !== stepId) : [...prev, stepId]
    );
  };

  const completedCount = completedSteps.length;
  const totalSteps = steps.length;
  const progressPercent = (completedCount / totalSteps) * 100;

  const navItems = [
    {
      key: 'home',
      label: 'Home',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      key: 'history',
      label: 'History',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      key: 'shop',
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
      key: 'profile',
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
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#F2F4F7', display: 'flex', justifyContent: 'center', minHeight: '100vh', alignItems: 'center' }}>
      <div className="app-scroll" style={customStyles.appContainer}>

        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <button style={customStyles.backBtn}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '-0.02em', color: '#1A1D20' }}>AI Routine</h1>
            <p style={{ fontSize: '13px', color: '#8E98A4' }}>Last Scan: 2 hours ago</p>
          </div>
          <button style={{ ...customStyles.backBtn, boxShadow: 'none', background: 'transparent' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8E98A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </header>

        {/* Routine Summary */}
        <div style={customStyles.routineSummary}>
          <div style={customStyles.summaryBadge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            Optimal Repair Plan
          </div>
          <h2 style={customStyles.summaryTitle}>
            Hydration &amp;<br />Scalp Recovery
          </h2>
          <div style={customStyles.progressContainer}>
            <div style={customStyles.progressHeader}>
              <span>Daily Progress</span>
              <span>{completedCount} of {totalSteps} steps</span>
            </div>
            <div style={customStyles.progressBarBg}>
              <div style={{ ...customStyles.progressBarFill, width: `${progressPercent}%`, transition: 'width 0.4s ease' }} />
            </div>
          </div>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              isCompleted={completedSteps.includes(step.id)}
              isActive={step.active === true}
              isLast={index === steps.length - 1}
              onToggle={handleToggle}
            />
          ))}
        </div>

        {/* Bottom Nav */}
        <nav style={customStyles.bottomNav}>
          {navItems.map((item) => {
            const isActive = activeNav === item.key;
            return (
              <button
                key={item.key}
                style={{
                  ...customStyles.navItem,
                  ...(isActive ? customStyles.navItemActive : {}),
                }}
                onClick={() => setActiveNav(item.key)}
              >
                {item.icon}
                {isActive && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default App;