// client/src/pages/share.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SharePage() {
  const router = useRouter();
  
  useEffect(() => {
    if (!router.isReady) return;
    
    const { article } = router.query;
    
    if (article) {
      const articleStr = Array.isArray(article) ? article[0] : article;
      
      // Store article
      sessionStorage.setItem('newsletter_article', articleStr);
      localStorage.setItem('newsletter_article', articleStr);
      document.cookie = `newsletter_article=${articleStr}; path=/; max-age=60`;
    }
    
    // Redirect
    setTimeout(() => {
      router.replace('/newsletter');
    }, 500); // Slightly longer to show the nice animation
  }, [router.isReady, router.query]);
  
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0f172a',
      color: '#06b6d4',
      fontFamily: 'system-ui, sans-serif'
    }}>
      {/* Simple Spinner */}
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid #1e293b',
        borderTopColor: '#06b6d4',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
        marginBottom: '1rem'
      }} />
      
      <p style={{ fontSize: '1.1rem' }}>Loading article...</p>
      
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}