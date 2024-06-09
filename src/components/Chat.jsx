import React, { useState } from 'react';

const Chat = ({ carOwner, handleClose }) => {
  const [messages, setMessages] = useState([
    { sender: 'owner', text: `Hello, I'm ${carOwner.name}. How can I help you?` },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'buyer', text: input }]);
      setInput('');
    }
  };

  return (
    <div className="fixed right-4 bottom-4 w-80  bg-white shadow-lg border border-gray-200 rounded-lg">
      <div className="bg-indigo-500 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h2 className="text-lg font-semibold">Chat with {carOwner.name}</h2>
        <button onClick={handleClose}>&times;</button>
      </div>
      <div className="p-4 overflow-y-auto max-h-60 flex flex-col space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${msg.sender === 'owner' ? 'bg-indigo-100 self-start' : 'bg-indigo-500 text-white self-end'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l-lg"
        />
        <button onClick={handleSend} className="bg-indigo-500 text-white px-4 rounded-r-lg">Send</button>
      </div>
    </div>
  );
};

export default Chat;
