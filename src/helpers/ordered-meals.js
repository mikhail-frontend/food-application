export const scheme = {
    selectedListKeys: {'m0': 0},
    selectedItems: [],
    meals: [],
    selectedGoodsCount: 0,
    totalPrice: 0
};

export const buildModel = (meals) => {
    const selectedListKeys = meals.reduce((acc, {id}) => {
        acc[id] = 0;
        return acc
    }, {});
    return {...scheme, selectedListKeys, meals}
};

export const modelReducer = (state, {id, count, action = 'plus'}) => {
    const {selectedListKeys, meals} = state;

    const updatedSelectedListKeys = {
        ...selectedListKeys,
        [id]: action === 'plus'
            ? selectedListKeys[id] + count
            : selectedListKeys[id] - count
    };

    const selectedKeys = Object.entries(updatedSelectedListKeys).filter(([, value]) => value).map(([key]) => key);
    const selectedItems = meals.filter(({id}) => selectedKeys.includes(id)).map(item => ({
        ...item,
        amount: updatedSelectedListKeys[item.id]
    }));

    const selectedGoodsCount = Object.values(updatedSelectedListKeys).reduce((acc, curr) => (acc + curr), 0);

    const totalPrice = selectedItems.reduce((acc, {price, amount}) => (acc + price * amount), 0)


    return {
        ...state,
        selectedListKeys: updatedSelectedListKeys,
        selectedItems,
        selectedGoodsCount,
        totalPrice
    };
};