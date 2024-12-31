import React from "react";

const PublicItemList = () => {
  const items = [
    { id: 1, name: "Item 1", price: "$10" },
    { id: 2, name: "Item 2", price: "$20" },
    { id: 3, name: "Item 3", price: "$30" },
  ];

  const handleBuyClick = () => {
    alert("Please sign in first");
    window.location.href = "/sign-in";
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Items for Sale</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="mb-4 border p-4 rounded">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
              onClick={handleBuyClick}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublicItemList;
