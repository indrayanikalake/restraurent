import  { Fragment, useContext } from 'react';
import classes from './Header.module.css';
import data from '../meals/data';
import MealSummary from '../meals/MealSummary';
import MealItem from '../ui/MealItem';
import  CartContext  from '../../Store/Card-Context';



const Header = ({onShow}) => {
  const cartCtx=useContext(CartContext);
  const noOfItems=cartCtx.items.reduce((total,item)=>{
  return total+item.amount;
  },0);
  return <Fragment className={classes.main}>
    <header className={classes.header}>
        <h1 className='headtext__cormorant'>ReactMeals</h1>
        <button className='custom__button' onClick={onShow}>Your Cart  <span>  {noOfItems}</span></button>
    </header>
    <div className={classes['main-image']}>
       <MealSummary />
    </div>
  
    {data.meals.map((meal,index)=>{
      return (
        <div className={classes.meal}>
        <MealItem key={meal.id+index} id={meal.id} name={meal.name} description={meal.description} price={meal.price} /> 
        </div>
      )
    })}
  
  </Fragment>
}

export default Header;
