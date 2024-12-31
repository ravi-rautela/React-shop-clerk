import { useClerk, useSession } from '@clerk/clerk-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
     const { isSignedIn } = useSession(); // Track if the user is signed in
     const { openSignIn, openSignUp, signOut } = useClerk();
    const navigate = useNavigate();
    
  // Handle sign-out
  const handleSignOut = () => {
    signOut(); // Sign out the user
    navigate("/"); // Redirect to the homepage (or any other page)
  };
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 text-white">
      <h1 className="text-xl font-semibold">Shop</h1>
      <div className="flex items-center">
        {isSignedIn ? (
          <>
            <button
              onClick={() => navigate("/checkout")}
              className="mr-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Go to Checkout
            </button>
            <button
              onClick={handleSignOut} // Sign out when clicked
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <button
              onClick={openSignIn}
              className="mr-4 bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Sign In
            </button>
            <button
              onClick={openSignUp}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar