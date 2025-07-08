// src/components/Receiver.jsx
import React, { useEffect, useRef, useState } from 'react';
import socket from '../socket';

const Receiver = () => {
  const chunksRef = useRef([]);
  const [status, setStatus] = useState("Waiting for file...");
  const [fileURL, setFileURL] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [progress, setProgress] = useState(0);
  const expectedChunks = useRef(0);
  const receivedChunks = useRef(0);

  useEffect(() => {
    socket.emit("joinRoom", "room-1");

    socket.on("receiveChunk", ({ chunk, fileName }) => {
  const typedChunk = new Uint8Array(chunk);
  chunksRef.current.push(typedChunk);
  receivedChunks.current += 1;
  setFileName(fileName);
  setStatus(`Receiving: ${fileName}`);
  setProgress((receivedChunks.current / expectedChunks.current) * 100);
});


    socket.on("transferComplete", ({ fileName }) => {
      const blob = new Blob(chunksRef.current, { type: 'application/octet-stream' });
      const url = URL.createObjectURL(blob);
      setFileURL(url);
      setFileName(fileName);
      setStatus(`Download ready: ${fileName}`);
      setProgress(100);
      chunksRef.current = [];
      expectedChunks.current = 0;
      receivedChunks.current = 0;
    });

    // Optional: reset on mount
    setProgress(0);
    setStatus("Waiting for file...");
    expectedChunks.current = 20; // optional estimate or dynamic later

    return () => {
      socket.off("receiveChunk");
      socket.off("transferComplete");
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">File Receiver</h2>
        <p className="text-gray-600 mb-4">{status}</p>

        {progress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-blue-500 h-4 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        {fileURL && (
          <a href={fileURL} download={fileName}>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Download File
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Receiver;
