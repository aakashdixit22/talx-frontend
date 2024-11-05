// import React, { useState, useRef, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { FaPaperclip } from 'react-icons/fa';
// import { ContextApp } from '../utils/Context';
// import ChatIcon from '../assets/bot.svg'; // Adjust the import path as needed

// const ChatAssistant = () => {
//   const { isOpen, setIsOpen } = useContext(ContextApp);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const chatWindowRef = useRef(null);
//   const fileInputRef = useRef(null);

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   const scrollToBottom = () => {
//     if (chatWindowRef.current) {
//       chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
//     }
//   };

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     const currentMessage = message.trim();
//     setMessage('');

//     if (currentMessage) {
//       setMessages([...messages, { sender: 'user', text: currentMessage }]);

//       const chatHistory = messages
//         .map((msg) => (msg.sender === 'user' ? `User: ${msg.text}` : `Bot: ${msg.text}`))
//         .join('\n');
//       const fullMessage = chatHistory + `\nUser: ${currentMessage}`;

//       try {
//         const response = await axios.post('https://ayurguru-flask-api.vercel.app/general_chat', {
//           message: fullMessage,
//           auth_message: import.meta.env.VITE_AUTH_MESSAGE,
//         });

//         const botResponse = response.data.response;
//         setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
//       } catch (error) {
//         console.error('Error fetching chatbot response:', error);
//         setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Sorry, something went wrong.' }]);
//       }
//     }
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { sender: 'user', text: `Uploaded file: ${file.name}` },
//       ]);
//       fileInputRef.current.value = '';
//     }
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       <button
//         className="bg-white p-2 rounded-full shadow-xl hover:bg-gray-200 focus:outline-none transition-transform transform hover:scale-105 active:scale-95"
//         onClick={toggleChat}
//       >
//         <img src={ChatIcon} alt="Chat Icon" className="w-12 h-12" />
//       </button>

//       {isOpen && (
//         <div className="bg-white border border-gray-300 rounded-lg shadow-2xl w-80 h-[400px] flex flex-col overflow-hidden animate-fade-in">
//           <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-black rounded-t-lg">
//             <h4 className="font-bold text-lg">Chat Assistant</h4>
//             <button onClick={toggleChat} className="text-black hover:text-gray-300 transition-colors">
//               ✖
//             </button>
//           </div>

//           <div ref={chatWindowRef} className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
//             {messages.length === 0 ? (
//               <p className="p-2 rounded-lg max-w-max self-end shadow-md animate-slide-up bg-gray-300 text-black font-medium">Hello! How can I assist you today?</p>
//             ) : (
//               messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`p-2 rounded-lg max-w-max shadow-md animate-slide-up ${
//                     msg.sender === 'user' ? 'bg-blue-500 text-white font-medium self-end' : 'bg-gray-300 text-black font-medium self-start'
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               ))
//             )}
//           </div>

//           <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-300 flex items-center space-x-2">
//             <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileUpload} />
//             <button type="button" className="text-gray-600 hover:text-gray-800" onClick={() => fileInputRef.current.click()}>
//               <FaPaperclip size={20} />
//             </button>
//             <input
//               type="text"
//               className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
//               placeholder="Type your message..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <button type="submit" className="bg-blue-600 text-black px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none shadow-md transition-all">
//               Send
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatAssistant;

import React, { useState, useRef, useEffect, useContext } from 'react';
import axios from 'axios';
import { FaPaperclip } from 'react-icons/fa';
import { ContextApp } from '../utils/Context';
import ChatIcon from '../assets/bot.svg'; // Adjust the import path as needed

const ChatAssistant = () => {
  const { isOpen, setIsOpen } = useContext(ContextApp);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const chatWindowRef = useRef(null);
  const fileInputRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const currentMessage = message.trim();
    setMessage('');

    if (currentMessage) {
      setMessages([...messages, { sender: 'user', text: currentMessage }]);

      const chatHistory = messages
        .map((msg) => (msg.sender === 'user' ? `User: ${msg.text}` : `Bot: ${msg.text}`))
        .join('\n');
      const fullMessage = chatHistory + `\nUser: ${currentMessage}`;

      try {
        const response = await axios.post('https://ayurguru-flask-api.vercel.app/general_chat', {
          message: fullMessage,
          auth_message: import.meta.env.VITE_AUTH_MESSAGE,
        });

        const botResponse = response.data.response;
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
      } catch (error) {
        console.error('Error fetching chatbot response:', error);
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Sorry, something went wrong.' }]);
      }
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: `Uploaded file: ${file.name}` },
      ]);
      fileInputRef.current.value = '';
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-400 transition-transform transform hover:scale-105 focus:outline-none"
        onClick={toggleChat}
        style={{ zIndex: 60 }} // Ensure button stays on top
      >
        <img src={ChatIcon} alt="Chat Icon" className="w-10 h-10" />
      </button>

      {isOpen && (
        <div className="bg-white border border-gray-300 rounded-xl shadow-2xl w-96 h-[500px] flex flex-col overflow-hidden animate-fade-in" style={{ zIndex: 50 }}>
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-xl">
            <h4 className="font-bold text-lg">Chat Assistant</h4>
            <button onClick={toggleChat} className="text-white hover:text-gray-200 transition-colors text-xl">
              ✖
            </button>
          </div>

          <div ref={chatWindowRef} className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.length === 0 ? (
              <p className="p-3 rounded-lg max-w-max shadow-md bg-gray-300 text-gray-800 font-medium self-start">
                Hello! How can I assist you today?
              </p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg max-w-xs shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white self-end'
                      : 'bg-gray-300 text-gray-800 self-start'
                  } flex ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-3 bg-gray-100 border-t border-gray-300 flex items-center space-x-2">
            <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileUpload} />
            <button type="button" className="text-gray-600 hover:text-gray-800" onClick={() => fileInputRef.current.click()}>
              <FaPaperclip size={20} />
            </button>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm placeholder-gray-400"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-md">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
