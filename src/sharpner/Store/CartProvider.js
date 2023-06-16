import React, {useReducer} from 'react'
import  CartContext  from './Card-Context'
const defaultCartState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
      const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);

  if (existingItemIndex !== -1) {
    const existingItem = state.items[existingItemIndex];
    const updatedItem = {
      ...existingItem,
      amount: existingItem.amount + 1,
      price: (existingItem.price/existingItem.amount) * (existingItem.amount+1)
    };

    const updatedItems = [...state.items];
    updatedItems[existingItemIndex] = updatedItem;
        
        return{
            items:updatedItems,
            totalAmount: state.totalAmount + (updatedItem.price/updatedItem.amount)
        }
    }
    else {
      const updatedItem={
        ...action.item,
        price:action.item.price*action.item.amount
      }
      return {
        items: state.items.concat(updatedItem),
        totalAmount: state.totalAmount + action.item.price * action.item.amount
      };
    }
  }
    if (action.type === 'REMOVE') {
        const existingCartItemsIndex = state.items.findIndex((item) => item.id === action.id);
        const existingItem = state.items[existingCartItemsIndex];
        if (!existingItem) {
          return state; // Return state as is if item is not found
        }
        const updatedAmount = state.totalAmount - (existingItem.price/existingItem.amount);
        let updatedItems;
        if (existingItem.amount === 1) {
          updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1,
            price:existingItem.price-(existingItem.price/existingItem.amount) 
          };
          updatedItems = [...state.items];
          updatedItems[existingCartItemsIndex] = updatedItem;
        }
        return {
          items: updatedItems,
          totalAmount: updatedAmount
        };
      }
    return defaultCartState;
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  const addItemTo=item=>{
      dispatchCartAction({type:'ADD', item:item});
  };

  const removeItemFrom=item=>{
      dispatchCartAction({type:'REMOVE',id:item.id}) 

  };

  const cartContext={
      id:cartState.id,
      items:cartState.items,
      totalAmount:cartState.totalAmount,
      addItem: addItemTo,
      removeItem: removeItemFrom
  }
return <CartContext.Provider value={cartContext}>
   {props.children}
</CartContext.Provider >
}

export default CartProvider;