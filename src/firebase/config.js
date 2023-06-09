import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, signOut } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyBCp3j_kLUDJDdIHQiLeCHPK4DxoMRed2E",
	authDomain: "coffee4coding.firebaseapp.com",
	projectId: "coffee4coding",
	storageBucket: "coffee4coding.appspot.com",
	messagingSenderId: "926553827885",
	appId: "1:926553827885:web:fb956027d4ddc36c30e6a4"
}

initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()
export { db, auth, signOut }
