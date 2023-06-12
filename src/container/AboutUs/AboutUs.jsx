import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus ' id='about' >
   
   <div className='app__aboutus-content flex__center'>
    <div className='app__aboutus-content_about'>
     <h1 className='headtext_cormorant'>About Us</h1>
     <p className='p__opensans'>ncdskj iuhfui uheurie eh jhui hf hf bfiurgf ehjf fj fhu </p>
     <button type='button' className='custom__button'>Know more</button>
    </div>

    <div className='app__aboutus-content-knife flex__center'>
     <img src={images.knife} alt='about_knife' />
    </div>

    <div className='app__aboutus-content_history'>
     <h1 className='headtext_cormorant'>Our History</h1>
     <p className='p__opensans'>ncdskj iuhfui uheurie eh jhui hf hf bfiurgf ehjf fj fhu </p>
     <button type='button' className='custom__button'>Know more</button>
    </div>

   </div>
  </div>
);

export default AboutUs;
