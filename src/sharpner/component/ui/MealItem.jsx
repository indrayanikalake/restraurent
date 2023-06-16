import React, { useContext, useRef, useState } from 'react'
import classes from './MealItem.module.css'
import CartContext from '../../Store/Card-Context';

const MealItem = ({id,name,description,price}) => {
   const [amountIsValid, setAmountIsValid] = useState(true);

    const amountRef=useRef();
   
    const cartCtx=useContext(CartContext);

    const submitHandler=(e,)=>{
       e.preventDefault();

       const enteredAmount=amountRef.current.value;
       const enteredAmountno= +enteredAmount;

       if(enteredAmount.trim().length===0 ||
       enteredAmountno<1 ||
       enteredAmount>5){
        setAmountIsValid(false);
        return;
       }
      const abc= cartCtx.addItem({
        id:id,
        name:name,
        amount:enteredAmountno,
        price:price
       })
   console.log(abc);
   setAmountIsValid(true);
       amountRef.current.value='';
    }
  return (
    <div >
    <form className={classes.app__menuitem}  >
    <div className={classes.app__menuitem_head}>
     <div className='app__menuitem-name'>
       <p className='p__cormorant' style={{color:'#DCCA87'}}>{name}</p>
     </div>
      
 
     <div className='app__menuitem-price'>
       <p className='p__cormorant'>{description}</p>
     </div>
 
    <div className={classes.app__menuitem_sub}>
     <p className='p__opensans' style={{color:'#AAA'}}>${price}</p>
    </div>
    </div>

    <div className={classes.app__menuitem_amount}>
    <span style={{color:'white' }} >
        Amount
        <input id='amount' type='number' style={{width:'20%',height:'50%',border:'3px solid black'}} ref={amountRef}/>
    </span>
    
    <button className='custom__button' type='button' style={{borderRadius:'19px',height:'80%'}}
   onClick={submitHandler}>+Add</button>
    </div>
   </form>
   {!amountIsValid && (<p style={{background:'salmon',
     border:'1px solid red'}}>Please enter a valid amount.(form 1-5)</p>)}
   </div>
  )
}

export default MealItem
