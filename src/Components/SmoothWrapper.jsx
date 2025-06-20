import { useRef, useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

export default function SmoothWrapper({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollbar = Scrollbar.init(scrollRef.current, {
      damping: 0.07, // smoothness
      alwaysShowTracks: true,
    });

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div>{children}</div>
    </div>
  );
}
