import React from 'react';
import './MealCard.css'
const MealCard = ({ mealData, handelCardBtn }) => {
    return (
        <div className='card-container'>
            <div className='card-image'>
                <img src={mealData.strMealThumb} alt={mealData.strMeal} />
            </div>
            <div className="card-info">
                <h3>Meal Name: {mealData.strMeal}</h3>
                <h4>Meal Category: {mealData.strCategory}</h4>
                <h4>Meal Area: {mealData.strArea}</h4>
                <h6><small><a href={mealData.strYoutube}>How To Cook It</a></small></h6>
            </div>
            <button className='add-btn' onClick={() => handelCardBtn(mealData.idMeal)}>Add To Cart</button>
        </div>
    );
};

export default MealCard;