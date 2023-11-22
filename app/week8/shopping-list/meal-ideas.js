"use client"

// Import necessary hooks
import React, { useState, useEffect } from 'react';

// Define API fetching function
const fetchMealIdeas = async (ingredient) => {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Failed to fetch meal ideas:', error);
    return [];
  }
};

// Define the MealIdeas component
const MealIdeas = ({ ingredient }) => {
  // Define state variables
  const [meals, setMeals] = useState([]);

  // Define load function
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  // Use the useEffect hook to load meal ideas when the ingredient prop changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Define the render method
  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <div>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <p>{meal.strMeal}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
