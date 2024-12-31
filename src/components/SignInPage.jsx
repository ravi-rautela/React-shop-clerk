// import React from "react";
// import { SignIn } from "@clerk/clerk-react";
// import { useLocation, useNavigate } from "react-router-dom";

// function SignInPage() {
//   const location = useLocation(); // Get the state passed to the route
//   const navigate = useNavigate(); // To redirect after sign-in

//   const afterSignInRedirectUrl = location.state?.redirectUrl || "/"; // Default to homepage if no redirectUrl

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-md">
//         <SignIn
//           path="/sign-in"
//           routing="path"
//           signUpUrl="/sign-up" // Optional: Link to sign-up page
//           afterSignInUrl={afterSignInRedirectUrl} // Redirect after sign-in
//         />
//       </div>
//     </div>
//   );
// }

// export default SignInPage;


import React from "react";
import { useClerk, useSession, SignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function App() {
  const { isSignedIn } = useSession(); // Track if the user is signed in
  const { openSignIn } = useClerk(); // Function to open the sign-in modal
  const navigate = useNavigate(); // To navigate to the checkout page

  // Sample product data
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "Product 1",
      price: "$15.00",
      description: "This is the description for product 1.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Product 2",
      price: "$25.00",
      description: "This is the description for product 2.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Product 3",
      price: "$35.00",
      description: "This is the description for product 3.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      name: "Product 4",
      price: "$45.00",
      description: "This is the description for product 4.",
    },
  ];

  const handleBuy = (product) => {
    if (isSignedIn) {
      // If the user is signed in, pass product data to the checkout page
      navigate("/checkout", { state: { product } });
    } else {
      // If the user is not signed in, open the sign-in modal
      navigate("/sign-in"); // We will handle the sign-in on a separate page
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            {/* Product Info */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-xl font-bold text-gray-700">{product.price}</p>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>

            {/* Buy Button */}
            <div className="p-4">
              <button
                onClick={() => handleBuy(product)} // Pass the product to checkout
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
