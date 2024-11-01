import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatAssistant from './components/ChatAssistant'; // Import the chat assistant

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Outlet />
      <ChatAssistant /> {/* Add the chat assistant component here */}
    </>
  );
}

export default App;
