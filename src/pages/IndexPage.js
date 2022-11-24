import React from "react";
import MealsSummary from "../components/Layout/MealsSummary/MealsSummury";
import AvailableMeals from "../components/AvailableMeals/AvailableMeals";
import styles from "../components/Layout/Header/Header.module.scss";
import MainImage from "../assets/img/meals.jpeg";

const IndexPage = () => {
  return (
    <>
      <div className={styles["main-image"]}>
        <img src={MainImage} alt="Delicious food. Choice ReactMeals!" />
      </div>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default IndexPage;