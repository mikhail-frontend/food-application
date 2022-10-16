export const buildModel = (meals) => {
    return meals.reduce((acc, {id}) => {
        acc[id] = 0;
        return acc
    }, {})
}

export const modelReducer = (state, {id, count}) => {
    return {...state, [id]: state[id] ? state[id] + count : count}
}