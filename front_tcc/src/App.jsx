import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss';
import JobCards from './JobCards';
import Login from './modules/Login/Login';
import { useAuth } from './Provider/auth';
import SwiperButtons from './SwiperButtons';
import Header from './components/Header/Header'



function App() {
const {user} = useAuth()  
  return (
    <Router>
    <Switch>
      <Header/>
      {user ? <Route path="/" component={Login} />: <Route path="/" component={Login} />}
      
    </Switch>
        {/* <Header />
        <JobCards />
        <div>
          <Login />
        </div>
        <SwiperButtons /> */}
      </Router>

  );

}

export default App;
