import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

const styles = {
  appContainer: {
    width: '400px',
    height: '867px',
    backgroundColor: '#F2F4F7',
    position: 'relative',
    padding: '24px',
    paddingTop: '52px',
    paddingBottom: '110px',
    overflowY: 'auto',
    borderRadius: '20px',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  searchBar: {
    background: '#FFFFFF',
    borderRadius: '24px',
    padding: '14px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
    flex: 1,
  },
  filterBtn: {
    background: '#2B2F35',
    width: '46px',
    height: '46px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    flexShrink: 0,
    cursor: 'pointer',
  },
  categoryPill: {
    padding: '10px 20px',
    borderRadius: '999px',
    background: '#FFFFFF',
    color: '#8E98A4',
    fontSize: '14px',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'Outfit, sans-serif',
    transition: 'all 0.2s',
  },
  categoryPillActive: {
    padding: '10px 20px',
    borderRadius: '999px',
    background: '#F46331',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'Outfit, sans-serif',
    transition: 'all 0.2s',
  },
  catalogCard: {
    background: '#FFFFFF',
    borderRadius: '32px',
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  catalogImgWrap: {
    width: '100%',
    aspectRatio: '1',
    borderRadius: '24px',
    background: '#F2F4F7',
    marginBottom: '12px',
    overflow: 'hidden',
    position: 'relative',
  },
  favBtn: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1A1D20',
    cursor: 'pointer',
    border: 'none',
  },
  favBtnActive: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#F46331',
    cursor: 'pointer',
    border: 'none',
  },
  catalogAdd: {
    width: '36px',
    height: '36px',
    borderRadius: '12px',
    background: '#2B2F35',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    flexShrink: 0,
  },
  bottomNav: {
    position: 'fixed',
    bottom: '32px',
    width: '336px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#FFFFFF',
    borderRadius: '999px',
    padding: '8px 12px',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
    zIndex: 100,
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 16px',
    borderRadius: '999px',
    color: '#8E98A4',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    fontFamily: 'Outfit, sans-serif',
  },
  navItemActive: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 16px',
    borderRadius: '999px',
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    background: '#2B2F35',
    border: 'none',
    fontFamily: 'Outfit, sans-serif',
  },
};

const allProducts = [
  {
    id: 1,
    name: 'Densifying Serum',
    brand: 'Advanced Scalp Care',
    rating: 4.8,
    reviews: 124,
    price: '$42.00',
    category: 'Serums',
    img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80',
    alt: 'Serum',
  },
  {
    id: 2,
    name: 'Moisture Mask',
    brand: 'Deep Repair Therapy',
    rating: 4.9,
    reviews: 86,
    price: '$36.00',
    category: 'Masks',
    img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=300&q=80',
    alt: 'Mask',
  },
  {
    id: 3,
    name: 'Bonding Oil',
    brand: 'Repairing Formula',
    rating: 4.7,
    reviews: 215,
    price: '$28.00',
    category: 'Oils',
    img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=300&q=80',
    alt: 'Oil',
  },
  {
    id: 4,
    name: 'Pure Shampoo',
    brand: 'Sulfate-Free Cleanser',
    rating: 4.6,
    reviews: 340,
    price: '$22.00',
    category: 'Scalp Care',
    img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=300&q=80',
    alt: 'Shampoo',
  },
];

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" style={{ fill: '#FFB800', color: '#FFB800' }}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const HeartIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? '#F46331' : 'none'} stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8E98A4" strokeWidth="2.5">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const FilterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="2" y1="14" x2="6" y2="14" />
    <line x1="10" y1="8" x2="14" y2="8" />
    <line x1="18" y1="16" x2="22" y2="16" />
  </svg>
);

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const HistoryIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const ShopIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const ProfileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const ProductCard = ({ product, isFav, onToggleFav, onAddToCart }) => (
  <div style={styles.catalogCard}>
    <div style={styles.catalogImgWrap}>
      <img
        src={product.img}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        alt={product.alt}
      />
      <button
        style={isFav ? styles.favBtnActive : styles.favBtn}
        onClick={() => onToggleFav(product.id)}
      >
        <HeartIcon filled={isFav} />
      </button>
    </div>
    <div>
      <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#1A1D20' }}>
        {product.name}
      </h4>
      <p style={{ fontSize: '12px', color: '#8E98A4', marginBottom: '8px' }}>{product.brand}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
        <StarIcon />
        <span style={{ fontSize: '12px', fontWeight: '600', color: '#1A1D20' }}>{product.rating}</span>
        <span style={{ fontSize: '11px', color: '#8E98A4' }}>({product.reviews})</span>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
      <span style={{ fontSize: '18px', fontWeight: '700', color: '#1A1D20' }}>{product.price}</span>
      <button style={styles.catalogAdd} onClick={() => onAddToCart(product.id)}>
        <PlusIcon />
      </button>
    </div>
  </div>
);

const BottomNav = ({ activeNav, setActiveNav }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
    { id: 'history', label: 'History', icon: <HistoryIcon /> },
    { id: 'shop', label: 'Shop', icon: <ShopIcon /> },
    { id: 'profile', label: 'Profile', icon: <ProfileIcon /> },
  ];

  return (
    <nav style={styles.bottomNav}>
      {navItems.map((item) => {
        const isActive = activeNav === item.id;
        return (
          <button
            key={item.id}
            style={isActive ? styles.navItemActive : styles.navItem}
            onClick={() => setActiveNav(item.id)}
          >
            {item.icon}
            {isActive && <span>{item.label}</span>}
          </button>
        );
      })}
    </nav>
  );
};

const ShopPage = ({ cartCount, setCartCount }) => {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  const categories = ['All Products', 'Serums', 'Masks', 'Oils', 'Scalp Care'];

  const filteredProducts = allProducts.filter((p) => {
    const matchCategory = activeCategory === 'All Products' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const toggleFav = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const addToCart = (id) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', letterSpacing: '-0.02em', color: '#1A1D20' }}>Shop</h1>
          <div style={{ position: 'relative' }}>
            <BagIcon />
            {cartCount > 0 && (
              <div style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                width: '8px',
                height: '8px',
                background: '#F46331',
                borderRadius: '50%',
                border: '2px solid #F2F4F7',
              }} />
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={styles.searchBar}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search hair products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontFamily: 'Outfit, sans-serif',
                fontSize: '15px',
                width: '100%',
                color: '#1A1D20',
              }}
            />
          </div>
          <div style={styles.filterBtn}>
            <FilterIcon />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '24px', scrollbarWidth: 'none' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            style={activeCategory === cat ? styles.categoryPillActive : styles.categoryPill}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFav={favorites.includes(product.id)}
            onToggleFav={toggleFav}
            onAddToCart={addToCart}
          />
        ))}
        {filteredProducts.length === 0 && (
          <div style={{ gridColumn: 'span 2', textAlign: 'center', color: '#8E98A4', padding: '40px 0', fontSize: '15px' }}>
            No products found.
          </div>
        )}
      </div>
    </div>
  );
};

const HomePage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#8E98A4' }}>
    <HomeIcon />
    <p style={{ marginTop: '16px', fontSize: '16px', fontWeight: '500' }}>Home</p>
    <p style={{ marginTop: '8px', fontSize: '13px' }}>Your personalized hair feed</p>
  </div>
);

const HistoryPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#8E98A4' }}>
    <HistoryIcon />
    <p style={{ marginTop: '16px', fontSize: '16px', fontWeight: '500' }}>History</p>
    <p style={{ marginTop: '8px', fontSize: '13px' }}>Your past orders and activity</p>
  </div>
);

const ProfilePage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#8E98A4' }}>
    <ProfileIcon />
    <p style={{ marginTop: '16px', fontSize: '16px', fontWeight: '500' }}>Profile</p>
    <p style={{ marginTop: '8px', fontSize: '13px' }}>Manage your account</p>
  </div>
);

const App = () => {
  const [activeNav, setActiveNav] = useState('shop');
  const [cartCount, setCartCount] = useState(0);

  const renderPage = () => {
    switch (activeNav) {
      case 'home': return <HomePage />;
      case 'history': return <HistoryPage />;
      case 'shop': return <ShopPage cartCount={cartCount} setCartCount={setCartCount} />;
      case 'profile': return <ProfilePage />;
      default: return <ShopPage cartCount={cartCount} setCartCount={setCartCount} />;
    }
  };

  return (
    <div style={{
      fontFamily: "'Outfit', sans-serif",
      backgroundColor: '#F2F4F7',
      color: '#1A1D20',
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100vh',
      WebkitFontSmoothing: 'antialiased',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::-webkit-scrollbar { display: none; }
      `}</style>
      <div style={styles.appContainer}>
        {renderPage()}
        <BottomNav activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>
    </div>
  );
};

export default App;