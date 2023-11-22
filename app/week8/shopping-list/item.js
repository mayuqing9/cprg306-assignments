"use client";
export default function Item({ name, quantity, category, onSelect }) {
  // Define the onClick handler
  const handleClick = () => {
    if (onSelect) {
      onSelect(name);
    }
  };

  // Return the JSX
  return (
    <section
      className="border bg-blue-500 bg-white-800 w- max-w-xs m-4 p-5 rounded shadow-lg"
      onClick={handleClick}  // Add the onClick prop
    >
      <h3 className="text-white text-xl font-bold">Name: {name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </section>
  );
}
