export const initialState = {
    user: null,
    todo: []
};


const reducer = (state, action) => {
    switch (action.type) {
        // case "ADD_TO_BASKET":
        //     return {
        //         ...state,
        //         basket: [...state.basket, action.item],
        //     };
        // case 'REMOVE_FROM_BASKET':
        //     const productIndex = state.basket.findIndex(
        //         (basketItem) => basketItem.id === action.id
        //     );
        //     let newBasket = [...state.basket];

        //     if (productIndex >= 0) {
        //         newBasket.splice(productIndex, 1);

        //     } else {
        //         console.warn(
        //             `Cant remove product (id: ${action.id}) as its not in basket!`
        //         )
        //     }

        //     return {
        //         ...state,
        //         basket: newBasket
        //     }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'APPEND__TODO':
            return {
                ...state,
                todo: [...state.todo, action.todo]
            }
        case 'UPDATE__TODOS':
            return {
                ...state,
                todo: action.todos
            }
        default:
            return state;
    }
};

export default reducer;