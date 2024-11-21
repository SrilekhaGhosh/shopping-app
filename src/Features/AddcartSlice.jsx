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
             if(!itemInCart){
                state.cartItem.push({
                    id:newItem.id,
                    title: newItem.title,
                    price:  newItem.price,
                    image:  newItem.image, // Add image property
                    quantity: 1,            
                    totalPrice: newItem.price,
                  });
                  state.totalQuantity++;

             }
             else{
                
                itemInCart.totalPrice += newItem.price;
                itemInCart.quantity += newItem.quantity;
             }  
         
             state.totalPrice += newItem.price;

        },

            removeFromCart: (state,action)=>{
                const id = action.payload;
                const existingItem = state.cartItem.find(item => item.id === id);
                if (existingItem) {
                  state.totalQuantity--;
                  state.totalPrice -= existingItem.price * existingItem.quantity ;
                   state.cartItem = state.cartItem.filter(item => item.id !== id);
                }

            },

             clearCart :(state)=>{
                state.cartItem =[];
                state.totalQuantity = 0;
                state.totalPrice = 0;
             },

             updateQuantity(state, action) {
                const { id, quantity } = action.payload;
                const existingItem = state.cartItem.find(item => item.id === id);
                if (existingItem) {
                  state.totalQuantity += quantity - existingItem.quantity;
                  state.totalPrice += (quantity - existingItem.quantity) * existingItem.price;
                  existingItem.quantity = quantity;
                  existingItem.totalPrice = existingItem.price * quantity;
                }
              },

              setDeliveryDate: (state, action) => {
                state.deliveryDate = action.payload; // Update deliveryDate in the store
              }
             
        }
        })

        export const {addTocart,removeFromCart,clearCart,updateQuantity, setDeliveryDate}  =  AddcartSlice.actions
        export default AddcartSlice.reducer 
            