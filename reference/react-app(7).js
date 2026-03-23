import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
    width: '400px',
    height: '867px',
    backgroundColor: '#F2F4F7',
    position: 'relative',
    overflowY: 'auto',
    overflowX: 'hidden',
    borderRadius: '20px',
    fontFamily: "'Outfit', sans-serif",
    color: '#1A1D20',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  productHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  iconBtn: {
    width: '44px',
    height: '44px',
    background: '#FFFFFF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    color: '#1A1D20',
    cursor: 'pointer',
    border: 'none',
  },
  productHero: {
    width: '100%',
    height: '420px',
    background: '#E8EBEE',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  contentSheet: {
    backgroundColor: '#F2F4F7',
    marginTop: '-40px',
    borderRadius: '32px 32px 0 0',
    position: 'relative',
    padding: '32px 24px',
    minHeight: '500px',
  },
  productTitleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '8px',
  },
  productTitle: {
    fontSize: '28px',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    margin: 0,
  },
  productPrice: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#F46331',
  },
  productMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    background: '#FFFFFF',
    padding: '6px 12px',
    borderRadius: '999px',
    fontWeight: 600,
    fontSize: '13px',
  },
  categoryTag: {
    fontSize: '13px',
    color: '#8E98A4',
    fontWeight: 500,
  },
  sectionBox: {
    background: '#FFFFFF',
    borderRadius: '24px',
    padding: '24px',
    marginBottom: '16px',
  },
  sectionBoxTitle: {
    fontSize: '16px',
    fontWeight: 700,
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: '0 0 12px 0',
  },
  sectionBoxText: {
    fontSize: '14px',
    color: '#8E98A4',
    lineHeight: 1.5,
    margin: 0,
  },
  ingredientList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    marginTop: '12px',
  },
  ingredientItem: {
    backgroundColor: '#F2F4F7',
    padding: '12px',
    borderRadius: '16px',
    textAlign: 'center',
  },
  ingredientIcon: {
    fontSize: '20px',
    marginBottom: '4px',
    display: 'block',
  },
  ingredientLabel: {
    fontSize: '11px',
    fontWeight: 600,
    color: '#1A1D20',
  },
  stepRow: {
    display: 'flex',
    gap: '16px',
    marginBottom: '12px',
    alignItems: 'flex-start',
  },
  stepNum: {
    width: '24px',
    height: '24px',
    background: '#2B2F35',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 700,
    flexShrink: 0,
  },
  stepText: {
    fontSize: '14px',
    color: '#8E98A4',
    lineHeight: 1.5,
    margin: 0,
  },
  bottomCta: {
    position: 'sticky',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#FFFFFF',
    padding: '20px 24px 40px',
    display: 'flex',
    gap: '16px',
    boxShadow: '0 -10px 30px rgba(0,0,0,0.05)',
    zIndex: 100,
  },
  btnPrimary: {
    flex: 1,
    background: '#2B2F35',
    color: 'white',
    height: '56px',
    borderRadius: '999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: '16px',
    gap: '10px',
    cursor: 'pointer',
    border: 'none',
    fontFamily: "'Outfit', sans-serif",
  },
  btnOutline: {
    width: '56px',
    height: '56px',
    border: '2px solid #E8EBEE',
    borderRadius: '999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    background: 'transparent',
    flexShrink: 0,
  },
  sectionTitleSm: {
    fontSize: '18px',
    fontWeight: 700,
    margin: '24px 0 16px',
  },
  reviewCard: {
    background: '#FFFFFF',
    padding: '16px',
    borderRadius: '24px',
    marginBottom: '12px',
  },
  reviewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
    alignItems: 'center',
  },
  reviewer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  reviewerImg: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  relatedScroll: {
    display: 'flex',
    gap: '16px',
    overflowX: 'auto',
    paddingBottom: '20px',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  relCard: {
    minWidth: '160px',
    background: '#FFFFFF',
    borderRadius: '24px',
    padding: '12px',
    cursor: 'pointer',
    flexShrink: 0,
  },
  relImg: {
    width: '100%',
    height: '140px',
    borderRadius: '16px',
    backgroundColor: '#F2F4F7',
    objectFit: 'cover',
    marginBottom: '8px',
    display: 'block',
  },
};

const IconBack = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const IconHeart = ({ filled }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? '#F46331' : 'none'} stroke={filled ? '#F46331' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#F46331" stroke="#F46331" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const IconCart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const IconArrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Toast = ({ message, visible }) => {
  if (!visible) return null;
  return (
    <div style={{
      position: 'absolute',
      bottom: '110px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#2B2F35',
      color: '#FFFFFF',
      padding: '12px 24px',
      borderRadius: '999px',
      fontSize: '14px',
      fontWeight: 600,
      zIndex: 200,
      whiteSpace: 'nowrap',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      fontFamily: "'Outfit', sans-serif",
    }}>
      {message}
    </div>
  );
};

const ProductDetailPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
      .app-container-scroll::-webkit-scrollbar { display: none; }
      .related-scroll-hide::-webkit-scrollbar { display: none; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    showToast('Added to cart!');
  };

  const handleLike = () => {
    setIsLiked(prev => !prev);
    showToast(isLiked ? 'Removed from wishlist' : 'Added to wishlist!');
  };

  return (
    <div
      className="app-container-scroll"
      style={styles.appContainer}
    >
      <nav style={styles.productHeader}>
        <button style={styles.iconBtn}>
          <IconBack />
        </button>
        <button style={styles.iconBtn} onClick={handleLike}>
          <IconHeart filled={isLiked} />
        </button>
      </nav>

      <div style={styles.productHero}>
        <img
          src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
          alt="Densifying Serum"
          style={styles.heroImg}
        />
      </div>

      <div style={styles.contentSheet}>
        <div style={styles.productTitleRow}>
          <h1 style={styles.productTitle}>Densifying Serum</h1>
          <span style={styles.productPrice}>$42</span>
        </div>

        <div style={styles.productMeta}>
          <div style={styles.rating}>
            <IconStar />
            4.9{' '}
            <span style={{ color: '#8E98A4', fontWeight: 400 }}>(128)</span>
          </div>
          <span style={styles.categoryTag}>Scalp Care • 50ml</span>
        </div>

        <div style={styles.sectionBox}>
          <h3 style={styles.sectionBoxTitle}>About the Product</h3>
          <p style={styles.sectionBoxText}>
            A concentrated leave-on serum clinically proven to increase hair density and reduce hair loss. Formulated to nourish the scalp environment for thicker, fuller looking hair in 90 days.
          </p>
        </div>

        <div style={styles.sectionBox}>
          <h3 style={styles.sectionBoxTitle}>Key Ingredients</h3>
          <div style={styles.ingredientList}>
            <div style={styles.ingredientItem}>
              <span style={styles.ingredientIcon}>☕</span>
              <span style={styles.ingredientLabel}>Caffeine</span>
            </div>
            <div style={styles.ingredientItem}>
              <span style={styles.ingredientIcon}>🌱</span>
              <span style={styles.ingredientLabel}>Peptides</span>
            </div>
            <div style={styles.ingredientItem}>
              <span style={styles.ingredientIcon}>💧</span>
              <span style={styles.ingredientLabel}>Redensyl</span>
            </div>
          </div>
        </div>

        <div style={styles.sectionBox}>
          <h3 style={styles.sectionBoxTitle}>How to Use</h3>
          <div style={styles.stepRow}>
            <div style={styles.stepNum}>1</div>
            <p style={styles.stepText}>Apply 1-2 pipettes directly to clean, dry scalp once daily.</p>
          </div>
          <div style={styles.stepRow}>
            <div style={styles.stepNum}>2</div>
            <p style={styles.stepText}>Massage thoroughly with fingertips for 2 minutes to boost absorption.</p>
          </div>
          <div style={styles.stepRow}>
            <div style={styles.stepNum}>3</div>
            <p style={styles.stepText}>Do not rinse. Style as usual. Best used at bedtime.</p>
          </div>
        </div>

        <h2 style={styles.sectionTitleSm}>Real Results</h2>
        <div style={styles.reviewCard}>
          <div style={styles.reviewHeader}>
            <div style={styles.reviewer}>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                style={styles.reviewerImg}
                alt="Sarah M."
              />
              <div>
                <p style={{ fontWeight: 600, fontSize: '14px', margin: 0 }}>Sarah M.</p>
                <p style={{ fontSize: '11px', color: '#8E98A4', margin: 0 }}>Verified Buyer</p>
              </div>
            </div>
            <div style={{ color: '#F46331', fontSize: '12px' }}>★★★★★</div>
          </div>
          <p style={{ fontSize: '13px', lineHeight: 1.4, margin: 0 }}>
            "I've been using this for 2 months and the baby hairs around my hairline are finally filling in. Highly recommend for thinning hair!"
          </p>
        </div>

        <h2 style={styles.sectionTitleSm}>Recommended for You</h2>
        <div
          className="related-scroll-hide"
          style={styles.relatedScroll}
        >
          <div style={styles.relCard}>
            <img
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=300&q=80"
              style={styles.relImg}
              alt="Moisture Mask"
            />
            <p style={{ fontWeight: 600, fontSize: '14px', margin: '0 0 4px 0' }}>Moisture Mask</p>
            <p style={{ fontSize: '13px', color: '#F46331', fontWeight: 700, margin: 0 }}>$36</p>
          </div>
          <div style={styles.relCard}>
            <img
              src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=300&q=80"
              style={styles.relImg}
              alt="Bonding Oil"
            />
            <p style={{ fontWeight: 600, fontSize: '14px', margin: '0 0 4px 0' }}>Bonding Oil</p>
            <p style={{ fontSize: '13px', color: '#F46331', fontWeight: 700, margin: 0 }}>$28</p>
          </div>
        </div>

        <div style={{ height: '120px' }}></div>
      </div>

      <div style={styles.bottomCta}>
        <button style={styles.btnOutline} onClick={handleAddToCart} title="Add to cart">
          <IconCart />
        </button>
        <button style={styles.btnPrimary} onClick={handleAddToCart}>
          Add to Cart {cartCount > 0 && `(${cartCount})`}
          <IconArrow />
        </button>
      </div>

      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
};

const App = () => {
  return (
    <Router basename="/">
      <div style={{
        fontFamily: "'Outfit', sans-serif",
        backgroundColor: '#F2F4F7',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Routes>
          <Route path="/" element={<ProductDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;