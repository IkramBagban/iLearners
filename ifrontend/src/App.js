import React from 'react';
// Import the UserCircleIcon from Heroicons
import Sheet from "./components/Sheet";
import "./App.css";
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import OTPVerification from './pages/OtpVerification';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <>
      <Header />
      {/* <Sheet /> */}
      <WelcomePage />
      <LandingPage />
      <LoginPage />
      <SignupPage />
      <OTPVerification />

    </>
  );
}

export default App;
