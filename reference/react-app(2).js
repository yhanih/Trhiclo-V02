import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

const styles = {
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
    maxWidth: '400px',
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
    fontFamily: "'Outfit', sans-serif",
    color: '#1A1D20',
    WebkitFontSmoothing: 'antialiased',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
  },
  backBtn: {
    width: '44px',
    height: '44px',
    background: '#FFFFFF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
  },
  headerTitle: {
    fontSize: '20px',
    fontWeight: 700,
    textAlign: 'center',
  },
  chartCard: {
    background: '#FFFFFF',
    borderRadius: '32px',
    padding: '24px',
    marginBottom: '24px',
  },
  chartHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  chartHeaderTitle: {
    fontSize: '16px',
    fontWeight: 600,
  },
  timeFilter: {
    display: 'flex',
    background: '#F2F4F7',
    padding: '4px',
    borderRadius: '999px',
    gap: '4px',
  },
  filterItem: {
    padding: '6px 12px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: 600,
    color: '#8E98A4',
    cursor: 'pointer',
  },
  filterItemActive: {
    padding: '6px 12px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: 600,
    color: '#1A1D20',
    background: '#FFFFFF',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    cursor: 'pointer',
  },
  vizArea: {
    height: '180px',
    width: '100%',
    position: 'relative',
    marginTop: '20px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: '0 10px',
  },
  chartGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 0,
  },
  gridLine: {
    width: '100%',
    height: '1px',
    background: '#F2F4F7',
  },
  chartBarGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    zIndex: 1,
    width: '30px',
  },
  barContainer: {
    width: '8px',
    height: '140px',
    background: '#F2F4F7',
    borderRadius: '4px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  barFillMoisture: {
    width: '100%',
    borderRadius: '4px',
    background: '#F46331',
    transition: 'height 0.5s ease',
  },
  chartLabel: {
    fontSize: '11px',
    color: '#8E98A4',
    fontWeight: 500,
  },
  timelineSection: {
    marginBottom: '16px',
  },
  timelineSectionTitle: {
    fontSize: '18px',
    fontWeight: 700,
    marginBottom: '16px',
  },
  historyItem: {
    background: '#FFFFFF',
    borderRadius: '24px',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '12px',
    transition: 'transform 0.2s',
    cursor: 'pointer',
  },
  dateBox: {
    width: '54px',
    height: '54px',
    background: '#F2F4F7',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  dateBoxDay: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#1A1D20',
  },
  dateBoxMonth: {
    fontSize: '10px',
    fontWeight: 600,
    color: '#8E98A4',
    textTransform: 'uppercase',
  },
  historyInfo: {
    flex: 1,
  },
  historyInfoTitle: {
    fontSize: '15px',
    fontWeight: 600,
    marginBottom: '4px',
  },
  statsRow: {
    display: 'flex',
    gap: '12px',
  },
  miniStat: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '12px',
    color: '#8E98A4',
    fontWeight: 500,
  },
  badgeUp: {
    fontSize: '11px',
    fontWeight: 600,
    padding: '4px 8px',
    borderRadius: '999px',
    background: '#E8F5E9',
    color: '#2E7D32',
    flexShrink: 0,
  },
  badgeDown: {
    fontSize: '11px',
    fontWeight: 600,
    padding: '4px 8px',
    borderRadius: '999px',
    background: '#FFEBEE',
    color: '#C62828',
    flexShrink: 0,
  },
  badgeNeutral: {
    fontSize: '11px',
    fontWeight: 600,
    padding: '4px 8px',
    borderRadius: '999px',
    background: '#E8F5E9',
    color: '#2E7D32',
    flexShrink: 0,
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
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    outline: 'none',
  },
  navItemActive: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    borderRadius: '999px',
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    background: '#2B2F35',
    outline: 'none',
  },
};

const MoistureIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#F46331">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

const StrengthIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F46331" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const chartData = [
  { label: '01 Oct', height: 60 },
  { label: '08 Oct', height: 65 },
  { label: '15 Oct', height: 82 },
  { label: '22 Oct', height: 78 },
  { label: 'Today', height: 80 },
];

const scanHistory = [
  { day: '28', month: 'Oct', title: 'Optimal Condition', moisture: '80%', strength: '72%', badge: '+2%', badgeType: 'up' },
  { day: '21', month: 'Oct', title: 'Slightly Dry', moisture: '78%', strength: '68%', badge: '-4%', badgeType: 'down' },
  { day: '14', month: 'Oct', title: 'Deep Hydration', moisture: '82%', strength: '70%', badge: '+12%', badgeType: 'up' },
  { day: '07', month: 'Oct', title: 'Base Profile', moisture: '70%', strength: '65%', badge: '--', badgeType: 'neutral' },
];

const TimeFilter = ({ active, onChange }) => {
  const filters = ['W', 'M', '6M'];
  return (
    <div style={styles.timeFilter}>
      {filters.map((f) => (
        <div
          key={f}
          style={active === f ? styles.filterItemActive : styles.filterItem}
          onClick={() => onChange(f)}
        >
          {f}
        </div>
      ))}
    </div>
  );
};

const ChartCard = () => {
  const [activeFilter, setActiveFilter] = useState('M');

  return (
    <div style={styles.chartCard}>
      <div style={styles.chartHeader}>
        <h2 style={styles.chartHeaderTitle}>Health Trends</h2>
        <TimeFilter active={activeFilter} onChange={setActiveFilter} />
      </div>
      <div style={styles.vizArea}>
        <div style={styles.chartGrid}>
          <div style={styles.gridLine} />
          <div style={styles.gridLine} />
          <div style={styles.gridLine} />
          <div style={styles.gridLine} />
        </div>
        {chartData.map((item, index) => (
          <div key={index} style={styles.chartBarGroup}>
            <div style={styles.barContainer}>
              <div style={{ ...styles.barFillMoisture, height: `${item.height}%` }} />
            </div>
            <span style={styles.chartLabel}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HistoryItem = ({ item }) => {
  const badgeStyle =
    item.badgeType === 'up'
      ? styles.badgeUp
      : item.badgeType === 'down'
      ? styles.badgeDown
      : styles.badgeNeutral;

  return (
    <div style={styles.historyItem}>
      <div style={styles.dateBox}>
        <span style={styles.dateBoxDay}>{item.day}</span>
        <span style={styles.dateBoxMonth}>{item.month}</span>
      </div>
      <div style={styles.historyInfo}>
        <h3 style={styles.historyInfoTitle}>{item.title}</h3>
        <div style={styles.statsRow}>
          <div style={styles.miniStat}>
            <MoistureIcon />
            {item.moisture}
          </div>
          <div style={styles.miniStat}>
            <StrengthIcon />
            {item.strength}
          </div>
        </div>
      </div>
      <div style={badgeStyle}>{item.badge}</div>
    </div>
  );
};

const BottomNav = ({ activePage, onNavigate }) => {
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
    <nav style={styles.bottomNav}>
      {navItems.map((item) => {
        const isActive = activePage === item.id;
        return (
          <button
            key={item.id}
            style={isActive ? styles.navItemActive : styles.navItem}
            onClick={() => onNavigate(item.id)}
          >
            {item.icon}
            {isActive && <span>{item.label}</span>}
          </button>
        );
      })}
    </nav>
  );
};

const ScanHistoryPage = ({ onNavigate, activePage }) => {
  const navigate = useNavigate();

  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div>
          <h1 style={styles.headerTitle}>Scan History</h1>
        </div>
        <div style={{ width: '44px' }} />
      </header>

      <ChartCard />

      <div style={styles.timelineSection}>
        <h2 style={styles.timelineSectionTitle}>Recent Scans</h2>
        {scanHistory.map((item, index) => (
          <HistoryItem key={index} item={item} />
        ))}
      </div>

      <BottomNav activePage={activePage} onNavigate={onNavigate} />
    </div>
  );
};

const PlaceholderPage = ({ title, activePage, onNavigate }) => (
  <div style={styles.appContainer}>
    <header style={styles.header}>
      <div style={{ width: '44px' }} />
      <h1 style={styles.headerTitle}>{title}</h1>
      <div style={{ width: '44px' }} />
    </header>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60%',
        color: '#8E98A4',
        fontSize: '16px',
        fontWeight: 500,
        gap: '12px',
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          background: '#FFFFFF',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8E98A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <span>{title} coming soon</span>
    </div>
    <BottomNav activePage={activePage} onNavigate={onNavigate} />
  </div>
);

const MainApp = () => {
  const [activePage, setActivePage] = useState('history');
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    setActivePage(page);
    if (page === 'history') navigate('/');
    else navigate(`/${page}`);
  };

  return (
    <Routes>
      <Route path="/" element={<ScanHistoryPage onNavigate={handleNavigate} activePage={activePage} />} />
      <Route path="/home" element={<PlaceholderPage title="Home" activePage={activePage} onNavigate={handleNavigate} />} />
      <Route path="/shop" element={<PlaceholderPage title="Shop" activePage={activePage} onNavigate={handleNavigate} />} />
      <Route path="/profile" element={<PlaceholderPage title="Profile" activePage={activePage} onNavigate={handleNavigate} />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router basename="/">
      <div
        style={{
          fontFamily: "'Outfit', sans-serif",
          backgroundColor: '#F2F4F7',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <MainApp />
      </div>
    </Router>
  );
};

export default App;