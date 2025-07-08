# 🚀 Dropify – Seamless Real-Time File Transfer

Dropify is a secure, real-time file sharing application built with **React**, **Socket.IO**, and **Node.js**. It allows users to send and receive files instantly across connected clients in the same virtual room — with authentication and a polished, modern UI.

---

## 🌟 Features

- 🔐 User Authentication (Register / Login)
- 📤 File Sender and 📥 Receiver modules
- ⚡ Real-time file transfer using Socket.IO
- 📁 Chunked upload for large files
- 📊 Progress indicators during transfer
- 🎨 Beautiful, responsive UI with Tailwind CSS
- 🌈 Gradient themes with dark glossy header & footer
- ✅ Clean, component-based architecture
- 🔐 (Optional) AES-based encryption (WIP or deprecated)

---

## 🧑‍💻 Tech Stack

- **Frontend**: React, Tailwind CSS, Heroicons, React Toastify
- **Backend**: Express, Node.js, Socket.IO
- **Auth**: JWT-based authentication
- **UI Enhancements**: Framer Motion, React Icons

---

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/vaibhav1445/dropify.git
cd dropify

## Install frontend dependencies
cd client   # or frontend, if that's the folder name
npm install

## Start Backend Server
cd backend
npm install
node index.js/npm start

## Start Frontend
cd frontend
npm install
npm run dev 

🔐 API Routes
Authentication
Method	Route	Description
POST	/api/auth/register	Register a user
POST	/api/auth/login	Login and get JWT

Socket.IO Events
Event	Direction	Description
joinRoom	Client → Server	Join a room
fileChunk	Client → Server	Send a file chunk
receiveChunk	Server → Client	Receive a file chunk
transferComplete	Server → Client	Notify when transfer is done

✨ Future Improvements
✅ Add encrypted transfer toggle
📜 Add QR code for quick room sharing
🧾 Transfer history log per user
📱 Mobile responsiveness enhancements
💬 Real-time chat channel

