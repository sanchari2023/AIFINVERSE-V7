// client/src/pages/share.tsx
import { useEffect } from 'react';

export default function Share() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const article = params.get('article');
    
    console.log("🔵 SHARE PAGE - Article:", article);
    console.log("🔵 SHARE PAGE - URL:", window.location.href);
    
    if (article) {
      // Store the article
      sessionStorage.setItem('newsletter_article', article);
      localStorage.setItem('newsletter_article', article);
      document.cookie = `newsletter_article=${article}; path=/; max-age=60`;
      
      console.log("✅ SHARE PAGE - Stored:", article);
    }
    
    // Redirect to newsletter
    window.location.href = '/newsletter';
  }, []);
  
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0f172a',
      color: '#06b6d4'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '48px',
          height: '48px',
          border: '3px solid #06b6d4',
          borderTopColor: 'transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 1rem auto'
        }} />
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
        <p>Loading article...</p>
      </div>
    </div>
  );
}