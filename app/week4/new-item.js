"use client";
import { useState } from 'react';

function NewItem() {
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

    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    // Resetting the state variables
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity:</label>
        <input 
          type="number" 
          id="quantity" 
          value={quantity} 
          onChange={(e) => setQuantity(Number(e.target.value))} 
          min="1" 
          max="99" 
          required 
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
        <select 
          id="category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

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
