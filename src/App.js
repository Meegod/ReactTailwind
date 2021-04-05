import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import Home from './pages';
import Menu from './pages/menu';
import About from './pages/about';
import {Switch,Route} from 'react-router-dom';

function App() {

  const [isOpen,setIsOpen]=useState(false);

  const toggle = () => {
    //console.log('i just clicked');
    setIsOpen(!isOpen);
};
  
 useEffect(()=>{

  function hideMenu()=>{
    if (window.innerWidth > 768 && isOpen){
      alert('something happened');
      setIsOpen(false);
      console.log('i resize');
    }
};

window.addEventListener('resize',hideMenu);

return ()=>{
  window.removeEventListener('resize',hideMenu);
};



 })






  return (
        <>
<Navbar toggle={toggle}/> 
<Dropdown isOpen={isOpen} toggle={toggle}/>
<Switch>
<Route path='/' exact component={Home}/>
<Route path='/about'  component={About}/>
<Route path='/menu'  component={Menu}/>
</Switch>

<Footer/>

  </>

  );
}

export default App;

