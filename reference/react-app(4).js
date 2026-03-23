import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const styles = {
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
    fontFamily: "'Outfit', sans-serif",
    color: '#1A1D20',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  headerNav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    color: '#1A1D20',
    cursor: 'pointer',
    border: 'none',
    flexShrink: 0,
  },
  headerTitle: {
    fontSize: '18px',
    fontWeight: 700,
  },
  profileHero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '32px',
  },
  profileAvatarWrap: {
    position: 'relative',
    marginBottom: '16px',
  },
  profileAvatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #FFFFFF',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
    display: 'block',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '32px',
    height: '32px',
    background: '#2B2F35',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    border: '3px solid #F2F4F7',
    cursor: 'pointer',
  },
  profileName: {
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '4px',
    textAlign: 'center',
  },
  profileSub: {
    fontSize: '14px',
    color: '#8E98A4',
    textAlign: 'center',
  },
  settingsSection: {
    marginBottom: '32px',
  },
  sectionLabel: {
    fontSize: '13px',
    fontWeight: 700,
    color: '#8E98A4',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '16px',
    marginLeft: '4px',
  },
  settingsGroup: {
    background: '#FFFFFF',
    borderRadius: '32px',
    overflow: 'hidden',
    padding: '8px',
  },
  settingItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    gap: '16px',
    textDecoration: 'none',
    color: 'inherit',
    borderBottom: '1px solid #F2F4F7',
  },
  settingItemLast: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    gap: '16px',
    textDecoration: 'none',
    color: 'inherit',
  },
  settingIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    background: '#F2F4F7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1A1D20',
    flexShrink: 0,
  },
  settingInfo: {
    flex: 1,
  },
  settingName: {
    fontSize: '15px',
    fontWeight: 600,
    marginBottom: '2px',
  },
  settingDesc: {
    fontSize: '12px',
    color: '#8E98A4',
  },
  settingValue: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#F46331',
    cursor: 'pointer',
  },
  badgePill: {
    background: '#FEEDE8',
    color: '#F46331',
    padding: '4px 12px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
  badgePillGreen: {
    background: '#E8F5E9',
    color: '#2E7D32',
    padding: '4px 12px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
  toggleSwitch: (isOn) => ({
    width: '48px',
    height: '26px',
    backgroundColor: isOn ? '#F46331' : '#CBD5E0',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: isOn ? 'flex-end' : 'flex-start',
    padding: '3px',
    cursor: 'pointer',
    transition: 'background-color 0.2s, justify-content 0.2s',
    flexShrink: 0,
  }),
  toggleKnob: {
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    borderRadius: '50%',
  },
  bottomNav: {
    position: 'absolute',
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
    width: 'fit-content',
  },
  navItem: (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: isActive ? '8px' : '0',
    padding: '12px 20px',
    borderRadius: '999px',
    color: isActive ? '#FFFFFF' : '#8E98A4',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 600,
    backgroundColor: isActive ? '#2B2F35' : 'transparent',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.2s, color 0.2s',
  }),
  navLabel: (isActive) => ({
    display: isActive ? 'inline' : 'none',
  }),
};

const SettingItem = ({ icon, name, desc, right, isLast = false }) => (
  <div style={isLast ? styles.settingItemLast : styles.settingItem}>
    <div style={styles.settingIcon}>{icon}</div>
    <div style={styles.settingInfo}>
      <div style={styles.settingName}>{name}</div>
      <div style={styles.settingDesc}>{desc}</div>
    </div>
    {right}
  </div>
);

const ToggleSwitch = ({ isOn, onToggle }) => (
  <div style={styles.toggleSwitch(isOn)} onClick={onToggle}>
    <div style={styles.toggleKnob}></div>
  </div>
);

const NavItem = ({ icon, label, isActive, onClick }) => (
  <button style={styles.navItem(isActive)} onClick={onClick}>
    {icon}
    <span style={styles.navLabel(isActive)}>{label}</span>
  </button>
);

const ProfilePage = () => {
  const [activeNav, setActiveNav] = useState('profile');
  const [notificationsOn, setNotificationsOn] = useState(true);

  const navItems = [
    {
      key: 'home',
      label: 'Home',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      ),
    },
    {
      key: 'history',
      label: 'History',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      key: 'shop',
      label: 'Shop',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <div style={styles.appContainer}>
      {/* Header */}
      <header style={styles.headerNav}>
        <button style={styles.backBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>
        <div style={styles.headerTitle}>Profile</div>
        <div style={{ width: '44px' }}></div>
      </header>

      {/* Profile Hero */}
      <div style={styles.profileHero}>
        <div style={styles.profileAvatarWrap}>
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
            alt="Alina Bhart"
            style={styles.profileAvatar}
          />
          <div style={styles.editBadge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </div>
        </div>
        <h2 style={styles.profileName}>Alina Bhart</h2>
        <p style={styles.profileSub}>Premium Member since Feb 2024</p>
      </div>

      {/* Hair Profile Section */}
      <div style={styles.settingsSection}>
        <div style={styles.sectionLabel}>Hair Profile</div>
        <div style={styles.settingsGroup}>
          <SettingItem
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            }
            name="Hair Type"
            desc="2C • Medium Porosity"
            right={<div style={styles.settingValue}>Update</div>}
          />
          <SettingItem
            isLast
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            }
            name="Active Goals"
            desc="Growth & Hydration"
            right={<div style={styles.badgePill}>2 Active</div>}
          />
        </div>
      </div>

      {/* Hardware Section */}
      <div style={styles.settingsSection}>
        <div style={styles.sectionLabel}>Hardware</div>
        <div style={styles.settingsGroup}>
          <SettingItem
            isLast
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            }
            name="Smart Scanner Pro"
            desc="Last synced 2h ago"
            right={<div style={styles.badgePillGreen}>Connected</div>}
          />
        </div>
      </div>

      {/* Preferences Section */}
      <div style={styles.settingsSection}>
        <div style={styles.sectionLabel}>Preferences</div>
        <div style={styles.settingsGroup}>
          <SettingItem
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            }
            name="Push Notifications"
            desc="Reminders & Scan Alerts"
            right={
              <ToggleSwitch
                isOn={notificationsOn}
                onToggle={() => setNotificationsOn(!notificationsOn)}
              />
            }
          />
          <SettingItem
            isLast
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            }
            name="Privacy Settings"
            desc="Manage your data sharing"
            right={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8E98A4" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            }
          />
        </div>
      </div>

      {/* Bottom Nav */}
      <nav style={styles.bottomNav}>
        {navItems.map((item) => (
          <NavItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            isActive={activeNav === item.key}
            onClick={() => setActiveNav(item.key)}
          />
        ))}
      </nav>
    </div>
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
          alignItems: 'center',
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <ProfilePage />
      </div>
    </Router>
  );
};

export default App;