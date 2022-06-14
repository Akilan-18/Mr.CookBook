import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const Progress = ({ image, setImage, data}) => {
  const { progress, url } = useStorage(image, data);
  console.log(data);
  useEffect(() => {
    if (url) {
      setImage(null);
    }
  }, [url, setImage]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default Progress;