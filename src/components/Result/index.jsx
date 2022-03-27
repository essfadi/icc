import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import Meal from "../Meal";
import { BoxContainer } from "../Meal/MealElements";
import { H3, BigContainer } from "./ResultElements";

const Result = ({ caloriesResult }) => {
  const lunch = [];
  const breakfast = [];
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
  let cals;
  if (caloriesResult.length === 3)
    cals = parseInt(caloriesResult).toPrecision(1);
  else {
    cals = parseInt(caloriesResult).toPrecision(2);
  }
  for (let i = 0; i < meals.length; i++) {
    if (meals[i].type === "breakfast") {
      breakfast.push(meals[i]);
    } else if (meals[i].type === "lunch") {
      lunch.push(meals[i]);
    }
  }
  const randomBreakfast =
    breakfast[Math.floor(Math.random() * breakfast.length)];
  let remainingCals = 0;
  if (typeof randomBreakfast !== "undefined") {
    remainingCals = cals - randomBreakfast.calories;
  }
  const twoSum = (array, goal) => {
    let indexes = [];

    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i].calories + array[j].calories === goal) {
          indexes.push(i);
          indexes.push(j);
        }
      }
    }
    return indexes;
  };
  let solution = [];
  for (let i = 0; i < 10 && solution.length != 2; i++) {
    remainingCals = remainingCals - 100;
    solution = twoSum(lunch, remainingCals);
  }
  let Dishes = [];
  if (solution.length == 2) {
    Dishes.push(randomBreakfast);
    Dishes.push(lunch[solution[0]]);
    Dishes.push(lunch[solution[1]]);
  }
  console.log(Dishes);
  return (
    <>
      <BigContainer>
        <H3>Based on your calories, We recommend the following:</H3>
        <BoxContainer>
          {Dishes.map((dish) => {
            return (
              <Meal
                calories={dish.calories}
                content={dish.content}
                image={dish.image}
                type={dish.type}
                rating={dish.rating}
              />
            );
          })}
        </BoxContainer>
      </BigContainer>
    </>
  );
};

export default Result;
