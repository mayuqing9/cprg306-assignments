"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useUserAuth } from "./_utils/auth-context"; // Import the useUserAuth hook

export default function Page() {
    const { user } = useUserAuth(); // Get the user object from the useUserAuth hook

    if (!user) {
        // If the user is not logged in, you can redirect them to the landing page or display a message.
        // For redirecting, you may need to use a routing library like react-router-dom.
        // For displaying a message, you can return a message component or JSX here.
        return (
            <div>
                <p>You are not logged in. Please log in to access the shopping list.</p>
                {/* You can add a login button or a link to the login page here */}
            </div>
        );
    }

    // If the user is logged in, render the shopping list page
    let itemsArray = itemsData.map((item) => ({ ...item }));

    const [items, setItems] = useState(itemsArray);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (selectedItem) => {
        const cleanedItemName = selectedItem.name.split(',')[0].trim().replace(/\s*\S*$/, '');
        setSelectedItemName(cleanedItemName);
    };

    return (
        <main className="flex">
            <div className="flex-grow">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <MealIdeas ingredient={selectedItemName} />
        </main>
    );
}

