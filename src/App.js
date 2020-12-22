import React from 'react'
import logo from './logo.svg';
import './App.css';
import MainFile from './component/calculator/MainFile'
import AllCards from './component/body/AllCards';
import Footer from './component/footer/Footer';

function App() {
  return (
    <React.Fragment>
       <AllCards></AllCards>
       <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
