# 🚀 Dropify – Seamless Real-Time File Transfer

Dropify is a secure, real-time file sharing application built with **React**, **Socket.IO**, and **Node.js**. It allows users to send and receive files instantly across connected clients in the same virtual room — with authentication and a polished, modern UI.

---

## 🌐 Live Demo

🔗 [Dropify Live App](https://dropify-frontend-8ua0lnkgc.vercel.app/)

---

## 🌟 Features

- 🔐 **User Authentication** – Register and Login securely  
- 📤 **File Sender** and 📥 **Receiver** modules  
- ⚡ **Real-time file transfer** using Socket.IO  
- 📁 **Chunked uploads** for large file support  
- 📊 **Progress indicators** during transfer  
- 🎨 **Responsive UI** with Tailwind CSS  
- 🌈 **Dark glossy theme** with gradients  
- 🧩 **Component-based architecture**  
- 🔐 *(Optional)* **AES-based encryption** *(WIP / deprecated)*  

---

## 🧑‍💻 Tech Stack

| Layer      | Technologies |
|------------|--------------|
| Frontend   | React, Tailwind CSS, Heroicons, React Toastify |
| Backend    | Express.js, Node.js, Socket.IO |
| Auth       | JWT (JSON Web Tokens) |
| UI Effects | Framer Motion, React Icons |

---

## 🔧 Installation Guide

### 1. Clone the repository

```bash
git clone https://github.com/vaibhav1445/dropify.git
cd dropify
```

### 2. Install Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Install Backend

```bash
cd backend
npm install
node index.js   # or: npm start
```

---

## 🔐 API Routes

### Authentication

| Method | Route                | Description          |
|--------|----------------------|----------------------|
| POST   | `/api/auth/register` | Register a new user  |
| POST   | `/api/auth/login`    | Login and get JWT    |

---

## 📡 Socket.IO Events

| Event             | Direction         | Description                |
|-------------------|-------------------|----------------------------|
| `joinRoom`        | Client → Server   | Join a virtual room        |
| `fileChunk`       | Client → Server   | Send a chunk of the file   |
| `receiveChunk`    | Server → Client   | Receive a file chunk       |
| `transferComplete`| Server → Client   | Notify transfer completion |

---

## 📦 Folder Structure

```
dropify/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   └── utils/
│
├── backend/
│   ├── routes/
│   ├── middleware/
│   └── index.js
│
└── README.md
```

---

## 💸 Payment Integration

💡 **Payment integration using Razorpay is in progress.**  
Future updates will enable premium features and encrypted transfer options via secure payments.

---

## ✨ Future Improvements

- ✅ Toggle for **Encrypted Transfers**
- 📱 **QR Code** for quick room sharing
- 🧾 **Transfer History** logs for users
- 💬 **Real-time Chat** in file rooms
- 📱 Full **Mobile Responsiveness**

---

## 👤 Author

**Vaibhav Srivastava**  
🔗 [LinkedIn](https://www.linkedin.com/in/vaibhav-srivastava-a21208244/)  
💻 MERN Stack Developer  

