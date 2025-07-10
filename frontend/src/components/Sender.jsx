
import React, { useState } from 'react';
import socket from '../socket';

const Sender = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const sendFile = () => {
    if (!file) return alert("Select a file first");

    socket.emit("joinRoom", "room-1");
    const chunkSize = 64 * 1024;
    let offset = 0;
    const reader = new FileReader();

    reader.onload = () => {
      const chunk = reader.result;

      socket.emit("fileChunk", {
        roomId: "room-1",
        chunk,
        fileName: file.name,
      });

      offset += chunkSize;
      setProgress(Math.min((offset / file.size) * 100, 100));

      if (offset < file.size) {
        readNextChunk();
      } else {
        socket.emit("transferComplete", {
          roomId: "room-1",
          fileName: file.name,
        });
      }
    };

    const readNextChunk = () => {
      const slice = file.slice(offset, offset + chunkSize);
      reader.readAsArrayBuffer(slice);
    };

    readNextChunk();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-lg shadow-2xl p-6 text-white">
        <h2 className="text-2xl font-bold text-center text-indigo-400 mb-6">Send Your File Securely</h2>

        <div className="mb-4">
          <label className="block w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded transition duration-200">
            Browse File
            <input
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
                setProgress(0);
              }}
              className="hidden"
            />
          </label>

          {file && (
            <p className="mt-2 text-sm text-gray-200 text-center">
              Selected: <span className="font-medium">{file.name}</span>
            </p>
          )}
        </div>

        <button
          onClick={sendFile}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded mb-4 transition duration-200"
        >
          Send File
        </button>

        {progress > 0 && (
          <div className="w-full bg-white/10 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sender;
