import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { FaPaperclip } from 'react-icons/fa'; // Import an icon for the file upload

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const chatWindowRef = useRef(null); // Ref for the chat window
  const fileInputRef = useRef(null); // Ref for the file input

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Function to auto-scroll to the bottom
  const scrollToBottom = () => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const currentMessage = message.trim();
    setMessage(''); // Clear the input field

    if (currentMessage) {
      // Add the user's message to the chat
      setMessages([...messages, { sender: 'user', text: currentMessage }]);

      // Prepare the chat history for sending
      const chatHistory = messages
        .map((msg) => (msg.sender === 'user' ? `User: ${msg.text}` : `Bot: ${msg.text}`))
        .join('\n');
      const fullMessage = chatHistory + `\nUser: ${currentMessage}`;

      try {
        // Send the user's message and chat history to the chatbot API
        const response = await axios.post('https://ayurguru-flask-api.vercel.app/general_chat', {
          message: fullMessage, // Send the full message history along with the current message
          auth_message: import.meta.env.VITE_AUTH_MESSAGE, // Pass the auth message as an environment variable
        });

        // Add the bot's response to the chat
        const botResponse = response.data.response; // assuming the API responds with { response: "..." }
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
      // Handle file upload logic here
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: `Uploaded file: ${file.name}` },
      ]);
      // Reset the file input
      fileInputRef.current.value = '';
    }
  };

  // Scroll to the bottom whenever messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-gradient-to-r from-green-500 to-green-700 text-black p-4 rounded-full shadow-xl hover:bg-blue-700 focus:outline-none transition-transform transform hover:scale-105 active:scale-95"
        onClick={toggleChat}
      >
        Chat
      </button>

      {isOpen && (
        <div className="bg-white border border-gray-300 rounded-lg shadow-2xl w-80 h-[400px] flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-black rounded-t-lg">
            <h4 className="font-bold text-lg">Chat Assistant</h4>
            <button onClick={toggleChat} className="text-black hover:text-gray-300 transition-colors">
              ✖
            </button>
          </div>

          {/* Chat Window */}
          <div ref={chatWindowRef} className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.length === 0 ? (
              <p className="p-2 rounded-lg max-w-max self-end shadow-md animate-slide-up bg-gray-300 text-black font-medium">Hello! How can I assist you today?</p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg max-w-max shadow-md animate-slide-up ${
                    msg.sender === 'user' ? 'bg-blue text-white font-medium self-end' : 'bg-gray-300 text-black font-medium self-start'
                  }`}
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>

          {/* Input Field */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-white border-t border-gray-300 flex items-center space-x-2"
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileUpload}
            />
            <button
              type="button"
              className="text-gray-600 hover:text-gray-800"
              onClick={() => fileInputRef.current.click()}
            >
              <FaPaperclip size={20} />
            </button>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-black px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none shadow-md transition-all"
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