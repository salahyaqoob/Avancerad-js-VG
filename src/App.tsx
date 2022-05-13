import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Router/Layout';
import { Home } from './Router/Home';
import { Contact } from './Router/Contact';
import { InitialAnimals } from './Animals/InitialAnimals';
import { SpecificAnimal } from './specificAnimal/SpecificAnimal';
import { HomePageAnimals } from './Animals/HomePageAnimals';
import { About } from './Router/About';


function App() {
  return (
    <div className="App">
       <InitialAnimals/> 
       {/* <SpecificAnimal/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePageAnimals/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          {/* <Route path='/animals' element={<HomePageAnimals/>} ></Route> */}
          <Route path="/specificanimal/:id" element={<SpecificAnimal />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
