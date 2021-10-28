import React, { useRef, useState } from 'react';
import './Login.scss';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuth } from '../../Provider/auth';
import GoogleLogin from './../../assets/btn_google.png'

firebase.initializeApp({
  apiKey: "AIzaSyCYMS-INQNvT_U3FLCCnvdSZxdA03qTAMg",
  authDomain: "job-slide.firebaseapp.com",
  projectId: "job-slide",
  storageBucket: "job-slide.appspot.com",
  messagingSenderId: "650362613900",
  appId: "1:650362613900:web:28626ddd8cb13589730ba9",
  measurementId: "G-BFQF476ZVN"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


export default function Login() {
  const [authUser, setAuthUser] = useAuthState(auth);
  // const [user,setUser] = useAuth()

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((res)=>{
        console.log('res',res)
    });
    console.log('auth',auth)
  }
  return (
    <div className="container">
 <div className="login">
      <section className="LoginSection">
        <h1>Bem vindo ao Job Slide</h1>
        <form action="">
          <input type="text" placeholder="email" />
          <input type="password" />
          <button type="submit">Login</button>
          </form>
        <p>ou</p>
        {/* {authUser ? <ChatRoom /> : <SignIn />} */}
        <button className="sign-in" onClick={signInWithGoogle}>
        <img src={GoogleLogin} alt="Login com Google"/>
      </button>
        <p>Problemas para fazer o login?</p>
      </section>
    </div>
  
    </div>
   )
}



function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        <img src={GoogleLogin} alt="Login com Google"/>
      </button>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => firestore.auth.SignOut()}>Deslogar</button>
  )
}




function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}

