import {createSlice} from '@reduxjs/toolkit'



const initialState={   
    cartItem:[],
    
       
    


};
export const AddcartSlice= createSlice({ 
    name: 'cart',
    initialState :{
    cartItem: [],
    totalQuantity: 0,
    totalPrice: 0,
    },
    reducers: {
        addTocart: (state, action) => {
            const itemInCart = state.cartItem.find(item=>item.id==action.payload.id);
            const newItem = action.payload;
             if(itemInCart){
                state.items.push({
                    id:cartItem.id,
                    title: newItem.title,
                    price:  newItem.price,
                    image:  newItem.image, // Add image property
                    quantity: 1,            
                    totalPrice: newItem.price,
                  });
                  state.totalQuantity++;

             }
             else{
                itemInCart.quantity++;
                itemInCart.totalPrice += newItem.price;
             }  
         
             state.totalPrice += newItem.price;

        },

            removeFromCart: (state,action)=>{
                const id = action.payload;
                const existingItem = state.items.find(item => item.id === id);
                if (existingItem) {
                  state.totalQuantity--;
                  state.totalPrice -= existingItem.price * existingItem.quantity;
                  state.items = state.items.filter(item => item.id !== id);
                }

            },

            clearCart :(state)=>{
                state.cartItem =[];
            }
        }
        })

        export const {addTocart,removeFromCart}  =  AddcartSlice.actions
        export default AddcartSlice.reducer 
            