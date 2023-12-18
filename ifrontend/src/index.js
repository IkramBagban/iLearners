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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/auth", element: <LandingPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/Otp", element: <OTPVerification /> },
      // { path: "/sheets", element: <Sheets /> },
      { path: "/sheet", element: <Sheet /> },
      { path: "/welcome", element: <WelcomePage /> },
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
