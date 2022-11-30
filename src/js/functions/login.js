
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { startSpinner, stopSpinner } from "../components/spinner";

const firebaseConfig = {
  apiKey: "AIzaSyCGogj3fGE6tA7X8GsT_L5_K13QQ4ppLp4",
  authDomain: "team-project-filmoteka-fd028.firebaseapp.com",
  projectId: "team-project-filmoteka-fd028",
  storageBucket: "team-project-filmoteka-fd028.appspot.com",
  messagingSenderId: "647650787195",
  appId: "1:647650787195:web:c479a609e1b68f161ec7de",
  measurementId: "G-0KS32BVV0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.querySelector('.form-signin');
const newUser = document.querySelector('.sign');
const user = document.querySelector('.login');
const loginout = document.querySelector('.out');
const errorMessage = document.querySelector('.errorMessage');
const backdrop = document.querySelector('.backdropForm');
const bodyScroll = document.querySelector('body');
const formSignin = document.querySelector('.form-signin')

const showLoginForm = () => {
    formSignin.classList.add('active');
    loginout.classList.remove('active');
    backdrop.classList.add('active');
}

const showApp = () => {
    formSignin.classList.remove('active');
    loginout.classList.add('active');
    backdrop.classList.remove('active');
}
const showLoginError = (error) => {
    if(error.code == 'auth/wrong-password'){
        errorMessage.innerHTML = "Wrong password. Try again."}
    else if(error.code == 'auth/invalid-email'){
        errorMessage.innerHTML = "Wrong email. Try again."}
    else {errorMessage.innerHTML = `Error: ${error.message}`}
}

const loginEmailPassword = async () =>{
    const loginEmail = document.querySelector('.form-control-mail').value;
    const loginPassword = document.querySelector('.form-control-password').value;
  try {
    startSpinner();
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    console.log(userCredential.user);
    }
  catch(error) {
    showLoginError(error)
  }
  finally {
    form.reset();
    stopSpinner();
  };
}
user.addEventListener('click', (e)=>{e.preventDefault(); loginEmailPassword()})

const createNewUser  = async () =>{
    const loginEmail = document.querySelector('.form-control-mail').value;
    const loginPassword = document.querySelector('.form-control-password').value;
  try {
    startSpinner();
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
    console.log(userCredential.user);
    }
  catch(error) {
    showLoginError(error)
  }
  finally {
    form.reset();
    stopSpinner()
  };
}
newUser.addEventListener('click', (e)=>{e.preventDefault(); createNewUser()})

const monitorAuthState = async() =>{
onAuthStateChanged (auth, user => {
    if (user) {
        console.log(user);
        bodyScroll.classList.remove('scroll-hidden');
        showApp();
        errorMessage.innerHTML = ''
    }
    else {
    showLoginForm();
    bodyScroll.classList.add('scroll-hidden');
    errorMessage.innerHTML = 'You are not logged in'
    }
})
}

monitorAuthState()

const logout = async() => {
await signOut(auth)
}
loginout.addEventListener('click', (e)=>{e.preventDefault(); logout()})

