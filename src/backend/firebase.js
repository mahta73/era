import * as firebase from "firebase";


const config = {
  apiKey: "AIzaSyCECW94pkMRHVnA2WaWZ0DWFpPRKKHicGY",
   authDomain: "mahta-83253.firebaseapp.com",
   databaseURL: "https://mahta-83253.firebaseio.com",
   projectId: "mahta-83253",
   storageBucket: "mahta-83253.appspot.com",
   messagingSenderId: "989674589084"
};

const firebaseRef = firebase.initializeApp(config);
export default firebaseRef;
