// import { initializeApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// }

// export const app = initializeApp(firebaseConfig)


import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAOhjDgws7xNpAWtdJ_BAyoMztLH6y7isk",
  authDomain: "stay-v1sta.firebaseapp.com",
  projectId: "stay-v1sta",
  storageBucket: "stay-v1sta.appspot.com",
  messagingSenderId: "439392026413",
  appId: "1:439392026413:web:c5293e9c16c7e5d4465da4"
};

export const app = initializeApp(firebaseConfig);