/*
  App Component
  Serves as the root component for the Counterspell Event Client.
  Sets up routing and includes global navigation components.
  Includes the ColorEditor component for theme switching.
*/

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavButtons from './components/NavButtons';
import Workshop from './pages/Workshop';
import ColorEditor from "./components/ColorEditor";
import LatestNews from "./pages/LatestNews";
import NewsDetailPage from "./components/NewsDetailPage";

// 定義配色方案類型
interface CustomScheme {
  variables: { [key: string]: string };
}

interface CustomSchemes {
  [key: string]: CustomScheme;
}

const App: React.FC = () => {
  useEffect(() => {
    const storedSchemes = localStorage.getItem('customSchemes');
    if (storedSchemes) {
      try {
        const customSchemes: CustomSchemes = JSON.parse(storedSchemes);
        const currentScheme = Object.keys(customSchemes).pop();
        if (currentScheme && customSchemes[currentScheme]?.variables) {
          document.documentElement.className = currentScheme;
          const vars = customSchemes[currentScheme].variables;
          Object.entries(vars).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value as string);
          });
        }
      } catch (error) {
        console.error('Failed to parse customSchemes from localStorage:', error);
      }
    }
  }, []);

  return (
    <Router>
      <ColorEditor />
      <NavButtons />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/LatestNews" element={<LatestNews />} />
        <Route path="/news/:id" element={<NewsDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
