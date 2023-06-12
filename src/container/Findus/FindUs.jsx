import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
   <div className='app__wrapper_ifo'>
    <SubHeading title='Contact'/>
    <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>FindUs</h1>
    <div className='app__wrapper-content'>
      <p className='p__opensans'>Available for 12-7!<br/>Just for you.<br />Lane hills buglow,schott hills!</p>
      <p className='p__cormorant' style={{color:'#DCCA87', margin:'2rem 0'}}>Opening Hours</p>
      <p className='p__opensans'>mon-fri 10.00 am - 2.30 pm</p>
      <p className='p__opensans'>sat-sun 10.00 am - 1.00 pm</p>
    </div>
    <button className='custom__button' style={{marginTop:'2rem'}}>VIsit Us</button>
   </div>
   <div className='app__wrapper_img'>
    <img src={images.findus} alt='findus'/>
   </div>
  </div>
);

export default FindUs;
