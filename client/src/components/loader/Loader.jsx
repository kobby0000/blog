import React from 'react';
import './loader.css';
import LoadingGif from '../../assets/images/loadingGif.gif';

function Loader() {
  return (
    <div className='loader'>
        <div className="loader_image">
            <img src={LoadingGif} alt="" />
        </div>
        </div>
  )
}

export default Loader