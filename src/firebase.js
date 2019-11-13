import firebase from 'firebase';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBS89mUjc8ibj8s5C3yBooK0AXq_eKr9uc",
  authDomain: "react-ecommerce-site-4f32c.firebaseapp.com",
  databaseURL: "https://react-ecommerce-site-4f32c.firebaseio.com",
  projectId: "react-ecommerce-site-4f32c",
  storageBucket: "react-ecommerce-site-4f32c.appspot.com",
  messagingSenderId: "7082512877",
  appId: "1:7082512877:web:273287230b5008cc1257e4"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// export firebase

export default firebase;
