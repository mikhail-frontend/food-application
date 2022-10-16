export const scheme = {
    selectedListKeys: {'m0': 0},
    selectedItems: [],
    meals: [],
    selectedGoodsCount: 0
};

export const buildModel = (meals) => {
    const selectedListKeys = meals.reduce((acc, {id}) => {
        acc[id] = 0;
        return acc
    }, {});
    return {...scheme, selectedListKeys, meals}
};

export const modelReducer = (state, {id, count}) => {
    const {selectedListKeys, meals} = state;
    const updatedList = {...selectedListKeys, [id]: selectedListKeys[id] ? selectedListKeys[id] + count : count};
    const selectedKeys = Object.entries(selectedListKeys).filter(([, value]) => value).map(([key]) => key);
    const selectedItems = meals.filter(({id}) => selectedKeys.includes(id)).map(item => ({...item, amount: selectedListKeys[item.id]}));
    const updatedSelectedGoodsCount = Object.values(selectedListKeys).reduce((acc, curr) => (acc+=curr), 0);
    return {
        ...state,
        selectedListKeys: updatedList,
        selectedItems,
        selectedGoodsCount: updatedSelectedGoodsCount
    };
};