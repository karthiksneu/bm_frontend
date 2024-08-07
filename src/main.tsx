import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import { LandingPage } from './pages/landing.tsx';
import Signup from './pages/signup.tsx';
import '@/styles/globals.css';
import SignUpCallback from './pages/signupcallback.tsx';
import Welcome from './pages/welcome.tsx';
import Community from './pages/community.tsx';
import Blunder from './pages/somethingwentwrong.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import PrivacyPolicy from './pages/privacypolicy.tsx';
import ComingSoon from './components/comingsoon.tsx';
import ChessNews from './pages/ChessNews.tsx';
import Chat from './pages/chat.tsx';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<App />} />
          <Route path="/chat" element={<Chat/>} />
          <Route path='/chessnews' element={<ChessNews/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/community" element={<Community />} />
          <Route path="/signupcallback" element={<SignUpCallback />} />
          <Route path="/blunder" element={<Blunder />} />
          <Route path='/privacy' element={<PrivacyPolicy/>}/> 
          <Route path='/comingsoon' element={<ComingSoon/>}/> 
        </Routes>
      </ErrorBoundary>
    </Router>
  </React.StrictMode>
);
