import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.scss';  
import { useAuth } from "../../Provider/auth";


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();
const firestore = firebase.firestore();


export default function Header() {
    const {authUser} = useAuthState(auth);
    const {user} = useAuth()
    console.log('user',user)
    return (
        <>
        {auth ? (<div className="header">
        <IconButton>
            <PersonIcon fontSize="large" className="header_icon"/>
        </IconButton>
        <div className="header_logo">
            <h1>JOB SLIDE</h1>
            <small>Seu próximo emprego na ponta dos dedos</small>
        </div>
        <IconButton>
            <ForumIcon fontSize="large" className="header_icon" />
        </IconButton>
    </div>) : <div className="header_logo">
            <h1>JOB SLIDE</h1>
            <small>Seu próximo emprego na ponta dos dedos</small>
        </div>}
    </>
        
    );
}