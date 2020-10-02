export const initialState = {
    basket: [],
    user: null,
}

const reducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_TO_BASKET":
            // logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
            // Logic for remove item to basket
            return {
                ...state
            };
        default:
            return state;
    }
}

export default reducer;