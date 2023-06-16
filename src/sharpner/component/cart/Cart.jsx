import React, { useContext } from 'react';

import classes from './Cart.module.css';

import CartContext from '../../Store/Card-Context';
import Modal from './Modal';

const Cart = ({onClose,closeTableHandler}) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const hasItem=cartCtx.items.length>0;

    const increaseAmountHandler = (item) => {
        cartCtx.addItem(item);
      };

    const decreaseAmountHandler=(item)=>{
        cartCtx.removeItem(item);
    };
    
    const handleOrder=()=>{
      onClose();
      closeTableHandler();
      window.location.href='#intro';
    }
    
    const info=(
        <ul >
            {cartCtx.items.map((item)=>(
                <div className={classes.cartCtx} >
                <p className='p__cormorant'style={{color:'#DCCA87'}}>{item.name}</p>
                <span>
                
                <button className='custom__button' style={{width:'2px',height:'5vh',}}>x{item.amount}
                <span className='p__opensanse' style={{ margin:'0 1rem',color:'#AAA'}}>${(item.price).toFixed(2)}<span>
                <button
               className='custom__button'
              style={{ width: '1vw', height: '4vh',margin:'-2rem 16rem',position:'absolute' }}
              onClick={() => increaseAmountHandler(item)} // Call the increaseAmountHandler
            >
              +
            </button></span>
            <button
               className='custom__button'
              style={{ width: '1vw', height: '4vh',margin:'-2rem 12.5rem',position:'absolute' }}
              onClick={() => decreaseAmountHandler(item)} // Call the increaseAmountHandler
            >
              -
            </button>
                </span></button>
                </span>
                </div>
            ))}
               
        </ul>
    )
   
  return(
    <Modal >
 
    <div className={classes.cart}>
      <h4 >{info}</h4>
     
      <h4 style={{margin:'1rem 1rem',color:'#AAA'}} className='p__opensanse'>Total Amount: <span style={{marginLeft:' 6rem'}}>${totalAmount} </span></h4><br />
      <div className={classes.button} style={{ margin:'1rem 8rem',display:'flex'}}>
        <button className='custom__button' style={{borderRadius:'18%'}} onClick={onClose}>
        Close</button>
        {hasItem && <button className='custom__button' style={{borderRadius:'18%',
        background:'blue',color:'white'}} onClick={handleOrder}>Order</button>}  

      </div>
    </div>
    
    
    </Modal>
  );
};
export default Cart;