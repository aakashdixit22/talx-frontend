

import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const TalxChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const AUTH_SECRET = import.meta.env.VITE_AUTH_SECRET;
  const API_ENDPOINT = import.meta.env.VITE_TALX_API;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateTypingEffect = (text, callback) => {
    let i = 0;
    const interval = setInterval(() => {
      setMessages((prev) => {
        const newMessages = [...prev];
        const lastMessage = newMessages[newMessages.length - 1];
        if (lastMessage.role === 'assistant') {
          newMessages[newMessages.length - 1] = {
            ...lastMessage,
            content: text.slice(0, i + 1), // Show text up to i-th character
          };
        }
        return newMessages;
      });
      i++;
      if (i === text.length) {
        clearInterval(interval);
        callback();
      }
    }, 1); // Typing speed, adjust as needed
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { role: 'user', content: inputMessage };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    let assistantResponse = '';
    let updateBuffer = ''; // Temporary buffer to hold chunks

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: AUTH_SECRET,
        },
        body: JSON.stringify({ query: inputMessage }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      // Start typing animation as soon as the assistant starts to respond
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: '' }, // Add an empty message to start the typing animation
      ]);

      const simulateEnd = () => setIsLoading(false);

      while (true) {
        const { done, value } = await reader?.read();
        if (done) break;

        const chunk = decoder.decode(value);
        updateBuffer += chunk;

        // Once we have a new chunk, update the typing effect
        simulateTypingEffect(updateBuffer, simulateEnd);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, there was an error processing your request. Please try again.',
        },
      ]);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="w-96 h-[500px] bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-t-xl flex justify-between items-center">
            <h3 className="text-lg font-bold">Talx Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-indigo-700 p-2 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] p-3 rounded-lg text-sm shadow-md ${
                  msg.role === 'user'
                    ? 'bg-blue-100 text-blue-900 self-end ml-auto'
                    : 'bg-gray-200 text-gray-800 self-start mr-auto'
                }`}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        {children}
                      </a>
                    ),
                  }}
                >
                  {msg.content}
                </ReactMarkdown>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-200 flex items-center space-x-2 bg-white">
            <input
              ref={inputRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Talx..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isLoading || !inputMessage.trim()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
              }`}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default TalxChatAssistant;
