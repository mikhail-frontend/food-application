export const getMeals = async () => {
    const response = await fetch('https://food-order-19eee-default-rtdb.firebaseio.com/meals.json');
    if(!response.ok) {
        throw new Error('Something went wrong!')
    }
    return await response.json();
}
export const addMeal = async (meal) => {
    const response = await fetch('https://food-order-19eee-default-rtdb.firebaseio.com/meals.json', {
        method: 'POST',
        body: JSON.stringify(meal),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error('Something went wrong')
    }
    await response.json();
}
