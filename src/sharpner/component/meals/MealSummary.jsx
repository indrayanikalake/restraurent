import React from 'react';

import classes from './MealSummary.module.css'


const MealSummary = () => {
  return( 
    <div className={classes.bg}>
  <section className={classes.summary}>
    
    <h2 className='p__cormorant' style={{color:'#DCCA87'}}>Delicious Food, Delivered To You</h2>
    <p className='p__opensans'  >Choose you favourite meal from our broad selection of 
        availavle meals and enjoy a Delicious meal or dinner at home.
     <br />All our meals are cooked with high quality ingredients, just-in-time andof course by experienced chefs!

    </p>

  </section>
 
  </div>
  )
}

export default MealSummary
