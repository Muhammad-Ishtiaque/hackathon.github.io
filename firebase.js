const firebaseConfig = {
    apiKey: "AIzaSyBDIghxIi5k6zVIELwh9nkIENQ1LVSfgIs",
    authDomain: "pop-a-balloon-4badd.firebaseapp.com",
    projectId: "pop-a-balloon-4badd",
    storageBucket: "pop-a-balloon-4badd.appspot.com",
    messagingSenderId: "229149611830",
    appId: "1:229149611830:web:9b68a589cee25676fa8597",
    measurementId: "G-P711GHQG2E"
  };
  // Initialize Firebase
 // const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);/ Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();