import React from 'react';
import './App.css';
import Header from "./Header";
import JobCards from './JobCards';
import SwiperButtons from './SwiperButtons';

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
