import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDK7nPb19ohcBbrx2grcCF1hMzAf-SbTEo",
  authDomain: "e-ride-app-deb97.firebaseapp.com",
  projectId: "e-ride-app-deb97",
  storageBucket: "e-ride-app-deb97.appspot.com",
  messagingSenderId: "566494574400",
  appId: "1:566494574400:web:253711b07c610ff04aeca5"
};


if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
