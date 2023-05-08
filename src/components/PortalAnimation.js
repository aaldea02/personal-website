import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './PortalAnimation.css';

const PortalAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="portal-container">
      <motion.div
        className="portal"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ duration: 2, loop: Infinity }}
      />
      {isLoading ? <div className="loading-text">Loading...</div> : null}
    </div>
  );
};

export default PortalAnimation;
