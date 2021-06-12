import Firebase  from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from '../seed';
const config = {
    apiKey: "AIzaSyCiVkfLBbwgiLZ4FnrXSKmyQsF71K7Tpm8",
    authDomain: "netflix-clone-b623e.firebaseapp.com",
    projectId: "netflix-clone-b623e",
    storageBucket: "netflix-clone-b623e.appspot.com",
    messagingSenderId: "865367677684",
    appId: "1:865367677684:web:21b6da7f7d9b8b62d99ca1",
    measurementId: "G-XB9LQM8FHQ"
  };
  const firebase = Firebase.initializeApp(config);
//   seedDatabase(firebase);
  export { firebase };