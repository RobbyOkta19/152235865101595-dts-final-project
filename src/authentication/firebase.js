import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dts-22-proa.firebaseapp.com",
  projectId: "dts-22-proa",
  storageBucket: "dts-22-proa.appspot.com",
  messagingSenderId: "581226198449",
  appId: "1:581226198449:web:f43cbff0fb2ba23f1cb990",
  measurementId: "G-55TLE24YQ3",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

const registerDenganEmailDanPassword = async (
  email,
  password,
  address,
  name
) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(
      "User yang teregistrasi dan berhasil login adalah",
      response.user
    );

    const user = response.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: name,
      authProvider: "local",
      email: email,
      address: address,
    });
  } catch (err) {
    console.log(err);

    // Sama dengan register
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
    return err.message;
  }
};

// Fungsi untuk Login
// Kita gunakan versi async / await untuk memudahkan yah
const loginDenganEmailDanPassword = async (email, password) => {
  // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User yang berhasil login adalah", userCredential.user);
  } catch (err) {
    console.log(err);

    // Sama dengan register
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
    return err.message;
  }
};

// Fungsi untuk reset Password
const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);

    console.log("Password reset sudah dikirimkan");
  } catch (err) {
    console.log(err);
  }
};
const logOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export {
  db,
  auth, // Nanti akan digunakan untuk hooks react-hooks-firebase
  registerDenganEmailDanPassword,
  loginDenganEmailDanPassword,
  resetPassword,
  logOut,
};
