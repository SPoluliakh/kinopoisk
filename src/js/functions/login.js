import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { startSpinner, stopSpinner } from '../components/spinner';
import { getDatabase, ref, set, onValue, remove } from 'firebase/database';
import { listRef, homeSectionRef } from '../refs/refs';

const firebaseConfig = {
  apiKey: 'AIzaSyCGogj3fGE6tA7X8GsT_L5_K13QQ4ppLp4',
  authDomain: 'team-project-filmoteka-fd028.firebaseapp.com',
  databaseURL:
    'https://team-project-filmoteka-fd028-default-rtdb.europe-west1.firebasedatabase.app',
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
// Fire Database
const dataBase = getDatabase();

export let listOfDataQueue = [];
export let listOfDataWathed = [];

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
export let userID = '';

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
  document.addEventListener('keyup', keyEsc);
  backdrop.addEventListener('click', closeFormByBackdrop);
  count += 1;
};

const showApp = () => {
  formSignin.classList.remove('active');
  userID = localStorage.getItem('userID');
  const starCountRefQueue = ref(dataBase, 'queue/' + userID + '/');
  onValue(starCountRefQueue, snapshot => {
    const data = snapshot.val();
    let list = [];
    if (
      data !== undefined &&
      data !== null &&
      localStorage.getItem('userID') !== '' &&
      localStorage.getItem('userID') !== null
    ) {
      list = Object.values(data);
    }
    listOfDataQueue = list.map(key => key);
    localStorage.setItem('listOfDataQueue', JSON.stringify(listOfDataQueue));
    return listOfDataQueue;
  });
  const starCountRefWatched = ref(dataBase, 'wathed/' + userID + '/');
  onValue(starCountRefWatched, snapshot => {
    const data = snapshot.val();
    let list = [];
    if (
      data !== undefined &&
      data !== null &&
      localStorage.getItem('userID') !== '' &&
      localStorage.getItem('userID')
    ) {
      list = Object.values(data);
    }
    listOfDataWathed = list.map(key => key);
    localStorage.setItem('listOfDataWathed', JSON.stringify(listOfDataWathed));
    return listOfDataWathed;
  });
  if (localStorage.getItem('statusUser') === 'anonym') {
    autorization.classList.add('active'), loginout.classList.remove('active');
  } else {
    loginout.classList.add('active'), autorization.classList.remove('active');
  }
  backdrop.classList.remove('active');
  bodyScroll.classList.remove('scroll-hidden');
  if (closeFormBtn) {
    closeFormBtn.removeEventListener('click', closeModalForm);
  }
  user.removeEventListener('click', loginUser);
  newUser.removeEventListener('click', registreteNewUser);
  document.removeEventListener('keyup', keyEsc);
  backdrop.removeEventListener('click', closeFormByBackdrop);
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
  showApp();
};

const closeModalForm = closeFormBtn.addEventListener('click', e => {
  e.preventDefault();
  closeForm();
});

const closeFormByBackdrop = e => {
  e.preventDefault();
  if (e.target.classList.contains('backdropForm')) {
    closeForm();
    return;
  }
};

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
    userID = userCredential.user.uid;
    localStorage.setItem('userID', userID);
    localStorage.setItem('statusUser', 'identificationUser');
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
    userID = userCredential.user.uid;
    localStorage.setItem('userID', userID);
    localStorage.setItem('statusUser', 'identificationUser');
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
  userID = '';
  localStorage.setItem('userID', '');
  localStorage.setItem('listOfDataWathed', '');
  localStorage.setItem('listOfDataQueue', '');
  localStorage.setItem('statusUser', 'anonym');
  if (localStorage.getItem('statusUser') === 'anonym') {
    autorization.classList.add('active'), loginout.classList.remove('active');
  } else {
    loginout.classList.add('active'), autorization.classList.remove('active');
  }
  await signOut(auth);
};

if (loginout) {
  loginout.addEventListener('click', e => {
    e.preventDefault();
    logout();
    document.location.reload();
  });
}
if (autorization) {
  autorization.addEventListener('click', e => {
    e.preventDefault();
    logout();
    showLoginForm();
  });
}

if (localStorage.getItem('movieList') && homeSectionRef) {
  listRef.innerHTML = JSON.parse(localStorage.getItem('movieList'));
}

// додає в БД фільм DataWathed
export function writeUserDataWathed(
  userId,
  idMove,
  poster_path,
  title,
  genres,
  release_date,
  id,
  vote_count,
  vote_average,
  popularity,
  overview
) {
  if (
    localStorage.getItem('userID') !== '' &&
    localStorage.getItem('userID') !== null
  ) {
    set(ref(dataBase, 'wathed/' + userId + '/' + idMove), {
      poster_path: poster_path,
      title: title,
      genres: genres,
      release_date: release_date,
      id: id,
      vote_count: vote_count,
      vote_average: vote_average,
      popularity: popularity,
      overview: overview,
    });
  }
}

// додає в БД фільм DataQueue
export function writeUserDataQueue(
  userId,
  idMove,
  poster_path,
  title,
  genres,
  release_date,
  id,
  vote_count,
  vote_average,
  popularity,
  overview
) {
  if (
    localStorage.getItem('userID') !== '' &&
    localStorage.getItem('userID') !== null
  ) {
    set(ref(dataBase, 'queue/' + userId + '/' + idMove), {
      poster_path: poster_path,
      title: title,
      genres: genres,
      release_date: release_date,
      id: id,
      vote_count: vote_count,
      vote_average: vote_average,
      popularity: popularity,
      overview: overview,
    });
  }
}

// отримати перелік фільмів з БД DataWathed
const starCountRefWatched = ref(
  dataBase,
  'wathed/' + localStorage.getItem('userID') + '/'
);
onValue(starCountRefWatched, snapshot => {
  const data = snapshot.val();
  userID = localStorage.getItem('userID');
  let list = [];
  if (
    data !== undefined &&
    data !== null &&
    localStorage.getItem('userID') !== '' &&
    localStorage.getItem('userID')
  ) {
    list = Object.values(data);
  }
  listOfDataWathed = list.map(key => key);
  localStorage.setItem('listOfDataWathed', JSON.stringify(listOfDataWathed));
  return listOfDataWathed;
});

// отримати перелік фільмів з БД DataQueue
const starCountRefQueue = ref(
  dataBase,
  'queue/' + localStorage.getItem('userID') + '/'
);
onValue(starCountRefQueue, snapshot => {
  const data = snapshot.val();
  userID = localStorage.getItem('userID');
  let list = [];
  if (
    data !== undefined &&
    data !== null &&
    localStorage.getItem('userID') !== '' &&
    localStorage.getItem('userID')
  ) {
    list = Object.values(data);
  }
  listOfDataQueue = list.map(key => key);
  localStorage.setItem('listOfDataQueue', JSON.stringify(listOfDataQueue));
  return listOfDataQueue;
});

// Видаляє фільм з БД DataWathed
export function deleteUserDataWathed(userId, idMove) {
  remove(ref(dataBase, 'wathed/' + userId + '/' + idMove), {});
}

// Видаляє фільм з БД DataQueue
export function deleteUserDataQueue(userId, idMove) {
  remove(ref(dataBase, 'queue/' + userId + '/' + idMove), {});
}
