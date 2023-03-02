import React, { useEffect, useState } from 'react';
import './DisplayMeals.css'
import MealCard from '../mealCard/MealCard';

const DisplayMeals = () => {
    const [meals, setMeals] = useState([])
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
        // console.log(meals);
    }, [url]);
    return (
        <div className='cards-container'>
            {
                meals.map(meal => <MealCard
                key={meal.idMeal}
                    mealData={meal}
                ></MealCard>)
            }
        </div>
    );
};

export default DisplayMeals;