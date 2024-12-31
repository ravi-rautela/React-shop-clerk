import React from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
