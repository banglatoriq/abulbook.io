import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import TimeLine from './Component/TimeLine/TimeLine';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TimeLine></TimeLine>
      <Footer></Footer>
    </div>
  );
}

export default App;
