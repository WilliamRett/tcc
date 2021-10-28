import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss';
import JobCards from './JobCards';
import Login from './modules/Login/Login';
import { useAuth } from './Provider/auth';
import SwiperButtons from './SwiperButtons';
import Header from './components/Header/Header'
import Dashboard from './modules/Dashboard/Dashboard';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const {authUser, setAuthUser} = useAuthState(auth);
const {user} = useAuth()  
console.log('user',user)
  return (
    <Router>
    <Switch>
      
      {!auth ? <Route path="/" component={Login} />: <Route path="/" component={Dashboard} />}
      
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
