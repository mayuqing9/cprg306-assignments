"use client";
import { useState } from 'react';

function NewItem({ onAddItem }) {  
  // State for the name
  const [name, setName] = useState("");

  // State for the quantity
  const [quantity, setQuantity] = useState(1);

  // State for the category
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);

    onAddItem(item);  

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* ... (no changes in the rest of the code) */}
      <button 
        type="submit" 
        className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default NewItem;
