import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Checkout from "./components/Checkout";
import SignInPage from "./components/SignInPage"; 
import { ClerkProvider} from "@clerk/clerk-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

// Clerk publishable key
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;


ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={publishableKey}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sign-in" element={<SignInPage />} /> 
        
      </Routes>
    </Router>
  </ClerkProvider>
);
