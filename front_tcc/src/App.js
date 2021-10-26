import React from 'react';
import './App.css';
import Header from "./Header";
import JobCards from './JobCards';
import Login from './Login';
import SwiperButtons from './SwiperButtons';

function App() {
  return (

    <div className="app">
      <Header />
      <JobCards />
      {/* <div>
      <Login/>
        </div> */}
      <SwiperButtons />
    </div>

  );

}

export default App;
