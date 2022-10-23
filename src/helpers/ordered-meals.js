
export const scheme = {
    selectedListKeys: {'m0': 0},
    selectedItems: [],
    selectedGoodsCount: 0,
    totalPrice: 0,
    meals: []
};

export const buildModel = (meals) => {
    const selectedListKeys = meals.reduce((acc, {id}) => {
        acc[id] = 0;
        return acc
    }, {});
    return {...scheme, selectedListKeys, meals}
};

export const modelReducer = (state, {id = '0', count = 0, action = 'plus', mealsToSet = []}) => {
    if(action === 'SET_MEALS') {
        return {...buildModel(mealsToSet), meals: mealsToSet};
    }
    const {selectedListKeys: selectedListKeysOld, meals} = state;
    const selectedListKeys = {
        ...selectedListKeysOld,
        [id]: action === 'plus'
            ? selectedListKeysOld[id] + count
            : selectedListKeysOld[id] - count
    };

    const selectedKeys = Object.entries(selectedListKeys).filter(([, value]) => value).map(([key]) => key);
    const selectedItems = meals.filter(({id}) => selectedKeys.includes(id)).map(item => ({
        ...item,
        amount: selectedListKeys[item.id]
    }));

    const selectedGoodsCount = Object.values(selectedListKeys).reduce((acc, curr) => (acc + curr), 0);

    const totalPrice = selectedItems.reduce((acc, {price, amount}) => (acc + price * amount), 0)


    return {
        ...state,
        selectedListKeys,
        selectedItems,
        selectedGoodsCount,
        totalPrice
    };
};