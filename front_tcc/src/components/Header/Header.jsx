import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.scss';  
import { useAuth } from "../../Provider/auth";


export default function Header() {
    const {user} = useAuth()
    console.log('user',user)
    return (
        <>
        {user ? (<div className="header">
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
    </div>) : null}
    </>
        
    );
}