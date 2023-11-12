import React from 'react';
import './1Home.css';

import { Link } from 'react-router-dom';

function Homepage() {
  return (
    
    
    <div className='Home'>
     
     
   
      <div className="men">
        <img src="./img/men1.png" alt="" srcset="" className='homeImg1' id='img1'/>
        <div className="mencon">
            <center><h1 className='menTitle'>“Fashions fade, style is eternal.”</h1></center>
            <center><h3 className='Slogan1'>If you can’t be better than your competition, just dress better</h3></center>
            <center><Link to="/Menswear"><button className='menbutton'>Explore</button></Link></center>
        </div>
      </div>

      <div className="women">
        <div className="womencon">
            <center><h1 className="womentitle">Chic Garments Reflecting Latest Fashion Trends</h1></center>
            <center><h3 className="Slogan2">Where Fashion Meets Passion, Every Woman Glows</h3></center>
            <center><Link to="/Womenswear"><button className='womenbutton'>Explore</button></Link></center>
        </div>
        <img src="./img/women1.png" alt="" className='homeImg2' id='img2' />
      </div>

      <div className="baby">
        <img src="./img/baby2.png" alt="" srcset="" className='homeImg3' id='img3'/>
        <div className="babycon">
          <center><h1 className="babytitle">Toddler's Attire and Style</h1></center>
          <center><h3 className="Slogan3">Cute and Cozy for Your Precious Bundle</h3></center>
          <center><Link to="/Babywear"><button className='babybutton'>Explore</button></Link></center>
        </div>
      </div>

      <div className="wh1">
        <p className='whc1'>Your All in One Destination for Wholesale Elegance</p>
      </div>

      <div className="wh2">
        <p className='whc2'>Where Exquisite Style Meets Unbeatable Affordability in Bulk</p>
      </div>

    </div>
 
  )
}

export default Homepage;