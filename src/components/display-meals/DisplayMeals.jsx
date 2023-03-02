import React, { useEffect, useState } from 'react';
import './DisplayMeals.css'
import MealCard from '../mealCard/MealCard';
import Cart from '../cart/Cart';

const DisplayMeals = () => {
    const [meals, setMeals] = useState([]);

    const [cart, setCart] = useState([]);

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=s`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
        // console.log(meals);
    }, [url]);

    const handelCardBtn = (mealID) => {
        let newMeal = meals.find(meal => meal.idMeal === mealID);
        newMeal['price'] = 50;
        if (!newMeal.quantity) {
            newMeal['quantity'] = 1;
        }
        setCart([...cart, newMeal]);
    }

    return (
        <div className='container'>
            <div className="cards-container">
                {
                    meals.map(meal => <MealCard
                        key={meal.idMeal}
                        mealData={meal}
                        handelCardBtn={handelCardBtn}
                    ></MealCard>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default DisplayMeals;