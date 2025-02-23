import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  const [loadingText, setLoadingText] = useState('Syncing with the blockchain');

  useEffect(() => {
    const texts = [
      'Syncing with the blockchain',
      'Validating smart contracts',
      'Mining new blocks',
      'Confirming transactions'
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setLoadingText(texts[index]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-purple-900">
      <motion.div
        className="relative w-32 h-48"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {/* Ethereum logo */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 256 417" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" className="w-full h-full">
            <path fill="#fff" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"/>
            <path fill="#fff" d="M127.962 0L0 212.32l127.962 75.639V154.158z"/>
            <path fill="#fff" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"/>
            <path fill="#fff" d="M127.962 416.905v-104.72L0 236.585z"/>
            <path fill="#eee" d="M127.961 287.958l127.96-75.637-127.96-58.162z"/>
            <path fill="#bbb" d="M0 212.32l127.96 75.638v-133.8z"/>
          </svg>
        </motion.div>

        {/* Animated blocks */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-400 rounded-sm"
            initial={{ x: 0, y: 0 }}
            animate={{
              x: [0, (i - 2) * 20],
              y: [0, (i - 2) * -30],
              scale: [1, 0.8, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
      <motion.p
        className="mt-8 text-xl font-bold text-white text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {loadingText}
      </motion.p>
      <motion.div
        className="mt-4 flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-blue-400 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
