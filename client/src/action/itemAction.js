import  { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './actionType';
import axios from 'axios';

export let getItems = () => dispatch => {
    dispatch(setItemLoading());
    axios.get('api/itemroute')
         .then(res => dispatch({
             type: GET_ITEMS,
             payload: res.data
         }))
};

export let deleteItem = (id) => dispatch => {
    axios.delete(`/api/itemroute/${id}`)
         .then(res => dispatch({
             type: DELETE_ITEM,
             payload: id
         }))
         .catch((error) => {
             console.log(`Deletion Failed due to ${ error }`);
         })
};

export let addItem = (item) => dispatch => {
    axios.post('/api/itemroute', item)
         .then(res => dispatch({
             type: ADD_ITEM,
             payload: res.data
         }))
        .catch((error) => {
           console.log(`Insertion Failed due to ${ error }`);
        });
};

export let setItemLoading = () => {
     return{
        type: ITEMS_LOADING
     };
};