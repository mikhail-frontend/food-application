import { createContext, useCallback, useEffect, useReducer, useState } from 'react';
import {createMealOrder} from "../API";
import { buildModel, modelReducer, scheme } from '../helpers/ordered-meals';
import { getMeals } from '../API';
import useMeals from '../hooks/use-meals';

const FoodApplicationContext = createContext({
  model: scheme,
  dispatchModel: (payload) => payload,
  sendRequest: (values) => values,
  error: null,
  loading: false,
  isFormFilled: false,
  setIsFormFilled: () => {}
});

export const FoodApplicationContextProvider = ({ children }) => {
  const [model, dispatchModel] = useReducer(modelReducer, buildModel([]), () => buildModel([]));
  const getData = useCallback(async () => await getMeals(), []);
  const { fetchMeals, error, loading } = useMeals(getData);
  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    (async () => {
      const meals = await fetchMeals();
      dispatchModel({
        action: 'SET_MEALS',
        mealsToSet: !meals
          ? []
          : Object.entries(meals).map(([key, value]) => ({ ...value, id: key }))
      });
    })();
  }, []);

  const { selectedListKeys } = model;

  const sendRequest = useCallback(
    async (values) => {
      const order = Object.entries(selectedListKeys)
        .filter(([, value]) => value)
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      const personalData = values;
      const responseData = await createMealOrder({
        order,
        personalData
      });
      setTimeout(() => {
        dispatchModel({
          action: 'SET_MEALS',
          mealsToSet: model.meals
        });
      }, 2520);

      return {
        order,
        personalData,
        responseData: JSON.parse(responseData.data)
      };
    },
    [selectedListKeys]
  );

  const context = {
    model,
    dispatchModel,
    sendRequest,
    error,
    loading,
    isFormFilled,
    setIsFormFilled
  };

  return (
    <FoodApplicationContext.Provider value={context}>{children}</FoodApplicationContext.Provider>
  );
};
export default FoodApplicationContext;
