import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IProductSlice {
    id: number | null,
    isActive: boolean,
    link: string,
    order: number[],
    error: string | null
}

export const addOrder = createAsyncThunk(
    "Products/addNewOrder",
    async function (order:object, {rejectWithValue}){
        try {
            await axios.post('https://orderitems-7c441-default-rtdb.firebaseio.com/.json', order)
        } catch (error) {
            return rejectWithValue(error)
        }
        
    }
)


const initialState = {
    id: null,
    isActive: false,
    link: "",
    order: [],
    error: null
}
const ProductSlice = createSlice({
    name: "Products",
    initialState,
    reducers:{
        switchToDetail(state:IProductSlice, action:any){
            state.id = action.payload.ID;
            state.isActive = true;
            state.link = action.payload.link;
            
        },
        closeDetail(state:IProductSlice){
            state.id = null;
            state.isActive = false;
            
        },
        removeDetail(state:IProductSlice){
            state.id = null;
            state.isActive = false;
        },
        addToCart(state:IProductSlice, action){
            state.order = [...state.order, action.payload]
        },
        removeFromCart(state:IProductSlice, action){
            state.order = state.order.filter( id => id !== action.payload)
        },
        clearCart(state:IProductSlice){
            state.order = []
        },

    },
    extraReducers:{
        [addOrder.rejected.type]: (state:IProductSlice, action:any) =>{
            state.error = action.payload
        }
    }
})

export const { switchToDetail, closeDetail, removeDetail, addToCart, removeFromCart, clearCart } = ProductSlice.actions

export default ProductSlice.reducer