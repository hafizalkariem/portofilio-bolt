import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold text-white">
          AC
        </div>
        
        {/* Loading Text */}
        <h1 className="text-4xl font-bold text-white mb-2">Alex Chen</h1>
        <p className="text-white/80 mb-8">Loading portfolio...</p>
        
        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress Text */}
        <p className="text-white/60 mt-4 text-sm">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;