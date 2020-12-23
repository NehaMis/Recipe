import React, { useState, useEffect } from "react";
import bg from "../assets/bg.jpg";

const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const RandomMeal = () => {
    const [meal, setMeal] = useState([]);
    useEffect(() => {
        async function getMeal() {
            const res = await fetch(API_URL);
            console.log("res", res);
            const data = await res.json();
            console.log("data", data);
            setMeal(data.categories);
        }
        getMeal();
    }, []);
    console.log("meal", meal);

    if (!meal) return null;
    // const { strMeal, strMealThumb, strInstructions, strArea, strCategory } = meal;

    return meal.map((item) => (
        <div className="container" styles={{ backgroundImage: `url(${bg})` }}>
            <div className="meal">
                <div className="meal-img">
                    <img src={item.strCategoryThumb} alt={item.strMeal} />
                </div>
                <div className="meal-details">
                    <h3 className="meal-title">{item.strMeal}</h3>
                    <p className="meal-instructions">{item.strCategoryDescription.substring(0, 400) + "..."}</p>
                    {/* <p className="meal-instructions">{item.strCategoryDescription}</p> */}
                    <ul className="meal-info">
                        <li>
                            Category
                            <strong>{item.strCategory}</strong>
                        </li>
                        {/* <li>
                            Area
                            <strong>{item.strArea}</strong>
                        </li> */}
                    </ul>
                    <button className="btn">
                        View Ingredients <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    ));
};

export default RandomMeal;
