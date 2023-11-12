import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

function Navbar() 
{
  return (
    <div className='Comp1'>

      <div className="shopname">
        <img src="./img/logo2.png" alt="" srcset="" className='logosize' />
        <Link className="pname" to="/Homepage">Stylish Corner</Link>
      </div>


      <div className="navcon">
        <ul>
          <li>
            <Link  to="/Menswear" className='linka'>Men's Wear</Link>
          </li>

          <li>
            <Link  to="/Womenswear" className='linka'>Women's Wear</Link>
          </li>

          <li>
            <Link  to="/Babywear" className='linka'>Baby's wear</Link>
          </li>

          

          
        </ul>
      </div>


      <div className="rest">
        <ul>
          <li><Link  to="/Contact" className='linkan'><img src="./img/search.png" alt="" srcset="" className='restImg' /></Link></li>
          <li><img src="./img/login.png" alt="" srcset="" className='restImg' /></li>
          <li><img src="./img/bag.png" alt="" srcset="" className='restImg' /></li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar;

