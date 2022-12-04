import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { startSpinner, stopSpinner } from '../components/spinner';

import { listRef } from '../refs/refs';

const firebaseConfig = {
  apiKey: 'AIzaSyCGogj3fGE6tA7X8GsT_L5_K13QQ4ppLp4',
  authDomain: 'team-project-filmoteka-fd028.firebaseapp.com',
  projectId: 'team-project-filmoteka-fd028',
  storageBucket: 'team-project-filmoteka-fd028.appspot.com',
  messagingSenderId: '647650787195',
  appId: '1:647650787195:web:c479a609e1b68f161ec7de',
  measurementId: 'G-0KS32BVV0R',
};
Object.freeze(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.querySelector('.form-signin');
const newUser = document.querySelector('.sign');
const user = document.querySelector('.login');
const loginout = document.querySelector('.out');
const autorization = document.querySelector('.autorization');
const errorMessage = document.querySelector('.errorMessage');
const backdrop = document.querySelector('.backdropForm');
const bodyScroll = document.querySelector('body');
const formSignin = document.querySelector('.form-signin');
const closeFormBtn = document.querySelector('.form__close-icone');
let count = 0;

const keyEsc = e => {
  e.preventDefault();
  if (e.key === 'Escape') {
    closeForm();
  }
};

const showLoginForm = () => {
  formSignin.classList.add('active');
  loginout.classList.remove('active');
  autorization.classList.remove('active');
  backdrop.classList.add('active');
  document.addEventListener('keydown', keyEsc);
  count += 1;
};

const showApp = () => {
  formSignin.classList.remove('active');
  if (localStorage.getItem('statusUser') === 'anonym') {
    autorization.classList.add('active'), loginout.classList.remove('active');
  } else {
    loginout.classList.add('active'), autorization.classList.remove('active');
  }
  backdrop.classList.remove('active');
  bodyScroll.classList.remove('scroll-hidden');
  closeFormBtn.removeEventListener('click', closeModalForm);
  user.removeEventListener('click', loginUser);
  newUser.removeEventListener('click', registreteNewUser);
  document.removeEventListener('keydown', keyEsc);
};
const showLoginError = error => {
  if (error.code == 'auth/wrong-password') {
    errorMessage.innerHTML = 'Wrong password. Try again.';
  } else if (error.code == 'auth/invalid-email') {
    errorMessage.innerHTML = 'Wrong email. Try again.';
  } else {
    errorMessage.innerHTML = `Error: ${error.message}`;
  }
};
const closeForm = () => {
  localStorage.setItem('statusUser', 'anonym');
  if (count < 1) {
    startPage();
  }
  showApp();
};
const closeModalForm = closeFormBtn.addEventListener('click', e => {
  e.preventDefault();
  closeForm();
});

const loginEmailPassword = async () => {
  const loginEmail = document.querySelector('.form-control-mail').value;
  const loginPassword = document.querySelector('.form-control-password').value;
  try {
    startSpinner();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    localStorage.setItem('statusUser', 'identificationUser');
    if (count < 1) {
      startPage();
    }
    showApp();
  } catch (error) {
    showLoginError(error);
  } finally {
    form.reset();
    stopSpinner();
  }
};
const loginUser = user.addEventListener('click', e => {
  e.preventDefault();
  loginEmailPassword();
});

const createNewUser = async () => {
  const loginEmail = document.querySelector('.form-control-mail').value;
  const loginPassword = document.querySelector('.form-control-password').value;
  try {
    startSpinner();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    localStorage.setItem('statusUser', 'identificationUser');
    console.log(userCredential.user);
    if (count < 1) {
      startPage();
    }
    showApp();
  } catch (error) {
    showLoginError(error);
  } finally {
    form.reset();
    stopSpinner();
  }
};
const registreteNewUser = newUser.addEventListener('click', e => {
  e.preventDefault();
  createNewUser();
});

const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      bodyScroll.classList.remove('scroll-hidden');
      showApp();
      errorMessage.innerHTML = '';
    } else {
      showLoginForm();
      bodyScroll.classList.add('scroll-hidden');
      errorMessage.innerHTML = 'You are not logged in';
    }
  });
};

if (localStorage.getItem('statusUser') !== 'anonym') {
  monitorAuthState();
} else {
  showApp();
}

const logout = async () => {
  await signOut(auth);
  localStorage.setItem('statusUser', 'anonym');
  if (localStorage.getItem('statusUser') === 'anonym') {
    autorization.classList.add('active'), loginout.classList.remove('active');
  } else {
    loginout.classList.add('active'), autorization.classList.remove('active');
  }
};

loginout.addEventListener('click', e => {
  e.preventDefault();
  logout();
});
autorization.addEventListener('click', e => {
  e.preventDefault();
  logout();
  showLoginForm();
});

if (localStorage.getItem('movieList')) {
  listRef.innerHTML = JSON.parse(localStorage.getItem('movieList'));
}
