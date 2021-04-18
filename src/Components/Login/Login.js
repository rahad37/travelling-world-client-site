import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import '../Shared/CommonDesign.css'
import travel from '../../images/travel.png';
import './Login.css';
import google from '../../images/google.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);
const Login = () => {
  
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () =>{
    firebase.auth().signInWithPopup(provider)
    .then(res => {
        const {displayName, email} = res.user;
        const signInUser = {name: displayName, email};
        setLoggedInUser(signInUser);
        history.replace(from);       
   
    })
    
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
    }
    return (
        <div>
             <div className='bg-danger text-light'>          
                <div className='d-flex justify-content-between p-2 container'>               
                    <div className='okey'>
                        <div className='d-flex'>
                            <img src={travel} alt='' className='img-fluid mr-2' style={{height: '40px'}}/>
                            <h2 style={{fontStyle: 'italic', color: 'white'}}>Travelling-World</h2>
                        </div>             
                    </div>
                    <div className='fine pt-2 okey'>
                        <ul>
                            <li>
                                <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
                                    Home
                                </Link>
                            </li>                    
                        </ul>
                    </div>            
                </div>
            </div>
           <div style={{width: '300px', margin: '0 auto', marginTop: '200px'}}>
                <button style={{fontSize: '20px', fontWeight: 'bold', padding: '10px', borderRadius: '25px', outline: 'none'}}  onClick={handleSignIn}> <img src={google} alt='' style={{height: '40px'}}/> Sign In With Google</button>
           </div>
        </div>

    );
};

export default Login;