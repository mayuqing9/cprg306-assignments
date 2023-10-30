"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas"; 
import itemsData from "./items.json";

export default function Page() {
    let itemsArray = itemsData.map((item) => ({ ...item }));

    const [items, setItems] = useState(itemsArray);
    const [selectedItemName, setSelectedItemName] = useState(''); // Additional state variable

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
