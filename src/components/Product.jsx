import { useClerk, useSession } from '@clerk/clerk-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Product = () => {
     const { isSignedIn } = useSession(); // Track if the user is signed in
     const { openSignIn } = useClerk();
     const navigate = useNavigate();

     // Sample product data
     const products = [
       {
         id: 1,
         image:
           "https://images.bestsellerclothing.in/data/selected/09-Aug-2023/213334601_g6.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
         name: "Product 1",
         price: "$15.00",
         description: "This is the description for product.",
       },
       {
         id: 2,
         image:
           "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12422-foll-rim-sq-way-stl-c4-eyegasus_g_1677_image_pla.jpg",
         name: "Product 2",
         price: "$25.00",
         description: "This is the description for product.",
       },
       {
         id: 3,
         image:
           "https://test470.nop-station.com/images/thumbs/0000024_apple-macbook-pro_550.jpeg",
         name: "Product 3",
         price: "$35.00",
         description: "This is the description for product.",
       },
       {
         id: 4,
         image:
           "https://5.imimg.com/data5/SELLER/Default/2024/8/444718751/YE/LK/GL/119093135/hp-intel-core-i5.jpg",
         name: "Product 4",
         price: "$45.00",
         description: "This is the description for product.",
       },
     ];

     // Handle the "Buy Now" action
     const handleBuy = (product) => {
       if (isSignedIn) {
         // If the user is signed in, pass product data to the checkout page
         navigate("/checkout", { state: { product } });
       } else {
         // If the user is not signed in, open the sign-in modal
         openSignIn();
       }
    };
    
  return (
    <div>
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-xl font-bold text-gray-700">{product.price}</p>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
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

export default Product