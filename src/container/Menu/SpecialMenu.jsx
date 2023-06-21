import React, { useState } from 'react';
import {images,data} from '../../constants';
import { SubHeading,MenuItem } from '../../components';
import './SpecialMenu.css';
import Wrap from '../../sharpner/Wrap';


const SpecialMenu = () => {
  const [table, setTable] = useState(false);

  const openTableHandler=()=>{
    setTable(true);
  }
  


  return(
  <div className='app__specialMenu flex__center section__padding' id='menu'>
   <div className='app__specialMenu-tile'>
     <SubHeading title='Menu that fits you Palace' />
     <h1 className='headtext__cormorant'>Today's Special</h1>
   </div>
   <div className='app__specialMenu-menu'>
   <div className='app__specialMenu-menu_wine flex__center'>
    <p className='app_specialMenu-menu_heading'>Cold Drinks</p>
    <div className='app__specialMenu_menu_items'>
    {data.cofees.map((cofee,index)=>{
      return(
      <MenuItem key={cofee.title+index} title={cofee.title}  price={cofee.price} tags={cofee.tags} />
    )})}
    </div>
   </div>
   <div className='app_specialMenu-menu_img'>
     <img src={images.menu} alt='menu img'/>
   </div>
   <div className='app__specialMenu-menu_cocktails flex__center'>
    <p className='app_specialMenu-menu_heading'>Cocktails</p>
    <div className='app__specialMenu_menu_items'>
    {data.coldDrinks.map((coldDrink,index)=>{
      return(
     <MenuItem key={coldDrink.title+index} title={coldDrink.title} price={coldDrink.price} tags={coldDrink.tags} />
    )})}
    </div>
   </div>

   </div>
   <div  style={{marginTop:'15px'}}>
     <button type='button' className='custom__button'  onClick={openTableHandler}>View More</button>
     {table && (
        <div className='appp__navbar-table slide-bottom '>
          <Wrap />
        </div>)}  
      
   </div>
  
  </div>
);
}

export default SpecialMenu;
