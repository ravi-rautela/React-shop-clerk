import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation(); // Access the product passed via location state
  const { user } = useUser(); // Get user details
  const { signOut } = useClerk(); // Sign out function
  const navigate = useNavigate(); // To navigate back to the home page or any other page
  const [showPopup, setShowPopup] = useState(false); // Manage popup visibility

  const product = location.state?.product;

  // If no product is passed (e.g., direct access to checkout), show an error message
  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-xl text-gray-600">No product selected.</h2>
      </div>
    );
  }

  // Handle the purchase action
  const handlePurchase = () => {
    // Show the thank you popup after purchasing
    setShowPopup(true);

    // Optionally, you could integrate payment logic here

    // Hide the popup after a few seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Hide popup after 3 seconds
  };

  // Handle sign-out
  const handleSignOut = () => {
    signOut(); // Sign out the user
    navigate("/"); // Redirect to the homepage (or any other page)
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-gray-800 p-4 text-white">
        <h1 className="text-xl font-semibold">Shop</h1>
        <div className="flex items-center gap-8 cursor-pointer text-xl">
          <h1 onClick={() => navigate("/")}>Home</h1>
          <button
            onClick={handleSignOut} // Sign out when clicked
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Checkout Details */}
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8 p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="text-xl font-bold text-gray-700">{product.price}</p>
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Purchase Button */}
          <button
            onClick={handlePurchase}
            className="mt-6 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            Purchase
          </button>
        </div>
      </div>

      {/* Thank You Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Thanks for your purchase!</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
