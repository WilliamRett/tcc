import React from 'react';
import Header from "./Header";
import JobCards from './JobCards';
import Login from './Login';
import SwiperButtons from './SwiperButtons';
import './App.css';

function App() {
  return (

    <div className="app">
      <Header />
      <JobCards />
      <SwiperButtons />
    </div>

  );

}

export default App;
