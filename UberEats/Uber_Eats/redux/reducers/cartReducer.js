let defaultState = {
    selectedItems: {
        items: [],
        restuarantName: " "
    },
}
let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            {
                let newState = { ...state };
                newState.selectedItems = {
                    items: [...state.selectedItems.items, action.payload],
                    restuarantName: action.restuarantName

                }
                console.log(newState);
                return newState;

            }
        default:
            return state;
    }
}
export default cartReducer;
