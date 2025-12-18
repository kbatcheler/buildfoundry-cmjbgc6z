import { useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      const message = { content: input, sender: 'user' };
      setMessages([...messages, message]);
      socket.emit('message', message);
      setInput('');
    }
  };

  socket.on('response', (data) => {
    setMessages((prev) => [...prev, { ...data, sender: 'bot' }]);
  });

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-gray-800">
      <div className="h-64 overflow-y-auto bg-gray-100 dark:bg-gray-700 p-4 rounded">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div
              className={`inline-block px-3 py-2 rounded-lg ${
                msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center mt-4">
        <input
          type="text"
          className="flex-1 px-3 py-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}