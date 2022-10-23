import { useContext } from "react";
import FoodApplicationContext from "../../store/food-application";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";
import Loader from "../UI/Loader/Loader";
import styles from "./AvailableMeals.module.scss";
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary";

const MealsList = () => {
  const {
    model: { meals }
  } = useContext(FoodApplicationContext);
  return (
    <ul>
      {meals.map(({ id, name, description, price }) => {
        return <MealItem description={description} name={name} price={price} key={id} id={id} />;
      })}
    </ul>
  );
};

const AvailableMeals = () => {
  const { loading, error } = useContext(FoodApplicationContext);
  return (
    <Card className={styles.meals}>
      <ErrorBoundary>
        {loading && !error && <Loader />}
        {!loading && !error && <MealsList />}
        {error && (
          <Card>
            <p style={{ color: "red", fontSize: "2rem" }}>
              {" "}
              {error ? error : "Something went wrong"}{" "}
            </p>
          </Card>
        )}
      </ErrorBoundary>
    </Card>
  );
};
export default AvailableMeals;
