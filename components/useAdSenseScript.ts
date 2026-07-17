import { useEffect } from 'react';

export const useAdSenseScript = () => {
  useEffect(() => {
    // Check if the script is already added to prevent duplicates
    const existingScript = document.querySelector('script[src*="adsbygoogle.js"]');
    if (existingScript) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3530618396714602';
    script.setAttribute('crossorigin', 'anonymous');
    script.onerror = (error) => {
      console.error('AdSense script failed to load:', error);
    };

    document.head.appendChild(script);

    return () => {
      // Do not remove script to avoid issues with AdSense re-initialization
    };
  }, []);
};
