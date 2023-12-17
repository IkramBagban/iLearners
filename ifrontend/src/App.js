import React, { useEffect, useState } from 'react';
// Import the UserCircleIcon from Heroicons
import Sheet from "./components/Sheet";
import "./App.css";
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import OTPVerification from './pages/OtpVerification';
import WelcomePage from './pages/WelcomePage';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const [token, setToken] = useState(true)
  const navigate = useNavigate();

  // useEffect(()=>{
  //   if(token){
  //     navigate('/welcome')
  //   }else{
  //     navigate('/auth')
  //   }
  // },[])
  return (
    <>
      {/* <Header /> */}
      {/* <Sheet />
      <WelcomePage />
      <LandingPage />
      <LoginPage />
      <SignupPage />
      <OTPVerification /> */}
      
      <Outlet />

    </>
  );
}

export default App;
