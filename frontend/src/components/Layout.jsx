import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ isAuthenticated, handleLogout, children }) => {
  const username = localStorage.getItem('username');

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />

      <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={window.location.pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            {isAuthenticated && username && (
              <div className="mb-4 text-lg font-semibold text-indigo-300">
                Hi, <span className="text-pink-400">{username}</span> 👋
              </div>
            )}

            <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-6">
              {children}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
