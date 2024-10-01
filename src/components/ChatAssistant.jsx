// import React, { useState } from 'react';

// const ChatAssistant = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       <button
//         className="bg-blue text-white p-4 text-3xl rounded-full shadow-lg hover:bg-blue-700"
//         onClick={toggleChat}
//       >
//         💬{/*  Chat */}
//       </button>

//       {isOpen && (
//         <div className="bg-white border rounded-lg shadow-lg p-4 mt-2 w-72 h-96">
//           <div className="flex justify-between items-center">
//             <h4 className="font-bold text-lg">Chat Assistant</h4>
//             <button onClick={toggleChat} className="text-gray-500">✖</button>
//           </div>
//           <div className="mt-4 h-full overflow-auto">
//             {/* Chat content goes here */}
//             <p className="text-sm">Hello! How can I assist you today?</p>
//             {/* You can add an input field and chat message logic here */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatAssistant;


import React, { useState } from 'react';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage(''); // Clear input field
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-blue text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        onClick={toggleChat}
      >
        💬 Chat
      </button>

      {isOpen && (
        <div className="bg-white border rounded-lg shadow-xl w-80 h-[400px] flex flex-col">
          <div className="flex justify-between items-center p-4 bg-blue-600 rounded-t-lg text-black">
            <h4 className="font-bold text-lg">Chat Assistant</h4>
            <button onClick={toggleChat} className="text-black hover:text-gray-500">
              ✖
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-gray-100">
            {messages.length === 0 ? (
              <p className="text-sm text-black">Hello! How can I assist you today?</p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className="bg-blue-500 text-black p-2 rounded-lg max-w-max self-end shadow-md"
                >
                  {msg}
                </div>
              ))
            )}
          </div>

          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-white border-t flex items-center space-x-2"
          >
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
