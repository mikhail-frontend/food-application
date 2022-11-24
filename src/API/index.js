export const getMeals = async () => {
  const response = await fetch('https://food-order-19eee-default-rtdb.firebaseio.com/meals.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  return await response.json();
};
export const createMealOrder = async (order) => {
  const response = await fetch('https://food-order-19eee-default-rtdb.firebaseio.com/orders.json', {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  await response.json();
};
