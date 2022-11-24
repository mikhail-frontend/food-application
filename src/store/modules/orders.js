import {createSlice} from "@reduxjs/toolkit";

const orders = createSlice({
  name: 'orders',
  initialState: {
    items: []
  },
  reducers: {
    setItems(state, { payload }) {
      state.items = payload
    }
  }
});

export const getOrders =  () => {
  return async (dispatch) => {
    const response = await fetch('https://food-order-19eee-default-rtdb.firebaseio.com/orders.json', {
      method: 'GET',
      headers: { Accept: 'application/json' }
    });
    const data = await response.json();
    dispatch(orders.actions.setItems(data));
  }
}

export default orders;