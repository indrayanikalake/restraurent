import React, {  useRef, useState } from 'react';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs';
import {charlotte} from '../../constants';
import './Intro.css';

const Intro = () => {
 const [playVideo, setPlayVideo] = useState(false);
  const vidRef=useRef();

  const handleVideo=()=>{
    setPlayVideo((prevPlayVideo)=>!prevPlayVideo)
    if(playVideo)vidRef.current.pause();
    else vidRef.current.play();
  }

  return(
  <div >
  <div className='app__video' id='intro'>
    <video src={charlotte} ref={vidRef} type='videp/mp4' loop controls={false} muted />
    <div className='app__video-overlay flex__center'>
      <div>
      
      <h3 className='app__video-head'>Trust<br /> The Taste!</h3><br />
      <p className='p__opensans' style={{color:'#AAA'}}> prepares and serves food <br />and drinks to customers.<br />Meals are generally served <br />and eaten on premises.</p><br />
      <h4 className='p__cormorant'>Thank you, <br />for visiting us!</h4>
      </div>
       
    
      <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
       {playVideo?<BsPauseFill  color='#fff' fontSize={30} />:<BsFillPlayFill color='#fff' fontSize={30} />}
      </div>
    </div>
  </div>
  
  </div>

  );
};

export default Intro;
