import  { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../action/actionType';

const initState = {
    items: [],
    loading: false
};

let itemReducer = (state=initState, action) => {
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };

        case DELETE_ITEM:
            return{
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };

        case ADD_ITEM:
            return{
              ...state,
              items: [action.payload, ...state.items]
            };

        case ITEMS_LOADING:
            return{
                ...state,
                loading: true
            };

        default:
            return state;
    }
};

export default itemReducer;