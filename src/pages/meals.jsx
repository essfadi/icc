import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import {
  MealsBanner,
  MealImage,
  MealTypography,
  SpecialWords,
  Chef,
  Dishes,
  DishesTitle,
  BoxContainer,
} from "../components/Meal/MealElements";
import Icon1 from "../images/svg-chicken.svg";
import Icon2 from "../images/chef.png";
import Meal from "../components/Meal";

const meals = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [meals, setMeals] = useState([]);
  const mealsCollectionRef = collection(db, "meals");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getMeals = async () => {
      const data = await getDocs(mealsCollectionRef);
      setMeals(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMeals();
  }, []);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Chef src={Icon2} />
      <MealsBanner>
        <MealImage src={Icon1} />
        <MealTypography>
          <h1>You are already There!</h1>
          <p>
            It is Time To Discover Some{" "}
            <SpecialWords>Delicious Meals</SpecialWords>, <br />
            and why not you suggest a new combination for the other folks!
          </p>
        </MealTypography>
      </MealsBanner>
      <Dishes>
        <DishesTitle>Let's Discover:</DishesTitle>
        <BoxContainer>
          {meals.map((meal) => {

            return (
              <Meal
                calories={meal.calories}
                content={meal.content}
                image={meal.image}
                type={meal.type}
                rating={meal.rating}
                key={meal.id}
              />
            );
          })}
        </BoxContainer>
      </Dishes>
    </>
  );
};

export default meals;
