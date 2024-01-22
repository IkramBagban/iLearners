import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sheet from "./components/Sheet";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import OTPVerification from "./pages/OtpVerification";
import LandingPage from "./pages/LandingPage";
import SheetProvider from "./store/SheetProvider";
import ChatMain from "./pages/Chat/ChatMain";
import Groups from "./pages/Chat/Groups";
import University from "./pages/Chat/University";
import Chats from "./pages/Chat/Chats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/auth", element: <LandingPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/Otp", element: <OTPVerification /> },
      // { path: "/sheets", element: <Sheets /> },
      { path: "/sheet", element: <Sheet /> },
      { path: "/welcome", element: <WelcomePage /> },
      { path: "/Chat", element: <ChatMain />, children : [
        { path: "/Chat/", element: <Chats /> },
        { path: "/Chat/Groups", element: <Groups /> },
        { path: "/Chat/University", element: <University /> },
      ] },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SheetProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </SheetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
