import {createSlice} from '@reduxjs/toolkit'



const initialState={   
    cartItem:[],

       
    


};
export const AddcartSlice= createSlice({ 
    name: 'cart',
    initialState,
    reducers: {
        addTocart: (state, action) => {
            const itemInCart = state.cartItem.find(item=>item.id==action.payload.id);
             if(itemInCart){
                itemInCart.quantity++;

             }
             else{
               state.cartItem.push({...action.payload,quantity:1}) ;
             }  
         
           

        },

            removeFromCart: (state,action)=>{
                state.cartItem= state.cartItem.filter((item) => item.id !== action.payload.id );

            },

            clearCart :(state)=>{
                state.cartItem =[];
            }
        }
        })

        export const {addTocart,removeFromCart}  =  AddcartSlice.actions
        export default AddcartSlice.reducer 
            