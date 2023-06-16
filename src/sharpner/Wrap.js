import { useState } from "react";
import CartProvider from "./Store/CartProvider";
import { Cart, Header } from "./component";




const Wrap = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCart=()=>{
    setCartIsShown(true);
  }

  const hideCart=()=>{
    setCartIsShown(false);
  }
  return (
   <CartProvider>
      {cartIsShown && (<Cart onClose={hideCart} />)}
       
       <Header onShow={showCart}/>
    </CartProvider>
  )
}

export default Wrap;