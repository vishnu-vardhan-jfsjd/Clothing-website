import React from 'react';
import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Navbar from './Navbar';
import Homepage from './Homepage'; 
import Menswear from './Menswear';
import Womenswear from './Womenswear';
import Babywear from './Babywear'; 




function App() {
  return (
    <div className="App">
       
       <Router>
        <Navbar />
        <Routes>
          <Route path='/Homepage' exact element={<Homepage />}/>
          <Route path='/Menswear' exact element={<Menswear />}/>
          <Route path='/Womenswear' exact element={<Womenswear />}/>
          <Route path='/Babywear' exact element={<Babywear />}/>
         
                  
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
