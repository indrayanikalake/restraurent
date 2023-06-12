import React,{useRef} from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Gallery.css';

const galleryImages= [images.gallery01, images.gallery02, images.gallery03,images.gallery04];

const Gallery = () => {
  const scrollRef=useRef(null);

  const scroll=(direction)=>{
    const {current}=scrollRef;
    if(direction==='left')current.scrollLeft -= 300;
    else current.scrollLeft +=300;
  }

  return(
  <div className='app__gallery flex__center' id='galary'>
   <div className='app__gallary-content'>
       <SubHeading title='instagram'/>
       <h1 className='headtext__cormorant'>Photo Gallary</h1>
       <p className='p__opensans' style={{color:'#AAA', marginTop:'2rem'}}>Here, you will find all of our collections<br />
        that are favourites of our customners.<br />
        You will also find some new <br />
        and creative collction that are <br />
        recently launched</p>
        <button type='button' className='custom__button' style={{marginTop:'2rem'}}>View More</button>
   </div>
   <div className='app__gallery-images'>
    <div className='app__gallery-images_container' ref={scrollRef}>
      {galleryImages.map((image,index)=>(
        <div className='app__gallery-images_card fles__center' key={`gallery_image-${index+1}`}>
          <img src={image} alt='gallery' />
          <BsInstagram className='gallery__image-icon' />
        </div>
      ))}
    </div>

    <div className='app__gallery-images_arrows'>
       <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')} />
       <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')} />
    </div>
   </div>

  </div>
  );
};

export default Gallery;