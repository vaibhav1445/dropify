// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ isAuthenticated, handleLogout, children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Header */}
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />

      {/* Unified Content Area */}
      <main className="flex-grow flex items-center justify-center px-4 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={window.location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-lg shadow-2xl p-6"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
