// // src/Layout.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Layout = ({ children, isAuthenticated, onLogout }) => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-white shadow p-4 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <img src="/logo.png" alt="Logo" className="h-8 w-8" />
//           <h1 className="text-xl font-bold text-indigo-600">Dropify</h1>
//         </div>
//         <nav className="space-x-4">
//           {isAuthenticated ? (
//             <>
//               <Link to="/" className="text-gray-700 hover:text-indigo-600">Sender</Link>
//               <Link to="/receiver" className="text-gray-700 hover:text-indigo-600">Receiver</Link>
//               <button onClick={onLogout} className="text-red-600 font-medium">Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="text-blue-600">Login</Link>
//               <Link to="/register" className="text-green-600">Register</Link>
//             </>
//           )}
//         </nav>
//       </header>
//       <main className="p-6">{children}</main>
//     </div>
//   );
// };

// export default Layout;
