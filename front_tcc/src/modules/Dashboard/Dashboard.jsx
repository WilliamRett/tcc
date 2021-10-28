import React, { useRef, useState } from 'react';
import './Dashboard.scss';
import { useAuth } from '../../Provider/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function Dashboard() {
  // const [authUser, setAuthUser] = useAuthState(auth);
  const {authUser, setAuthUser} = useAuthState(auth);

  return (
    <div className="container">
   <p>caiu na dashboard</p>
    </div>
   )
}








// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (<>
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
//       <p>{text}</p>
//     </div>
//   </>)
// }

