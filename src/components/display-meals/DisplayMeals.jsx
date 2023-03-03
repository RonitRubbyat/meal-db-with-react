import React, { useEffect, useState } from 'react';
import './DisplayMeals.css'
import MealCard from '../mealCard/MealCard';
import Cart from '../cart/Cart';

const DisplayMeals = ({ search }) => {
    const [meals, setMeals] = useState([]);

    const [cart, setCart] = useState([]);

    let url;
    if (search.length === 1) {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`;
    } else {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    }
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
    };

    if (meals) {
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
};

export default DisplayMeals;