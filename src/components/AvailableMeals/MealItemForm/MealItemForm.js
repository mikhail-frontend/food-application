import styles from "./MealItemForm.module.scss";
import Input from "../../UI/Input/Input";
import { useState } from "react";

const MealItemForm = ({ onAddItem }) => {
  const [count, setCount] = useState(1);
  const changeHandler = (value) => {
    if (Number(value) < 1) {
      setCount(() => 1);
    }
    setCount(Number(value));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    onAddItem(count);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        type="number"
        placeholder="1"
        label="Amount"
        min={1}
        max={5}
        changeHandler={changeHandler}
        value={count}
      />
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
