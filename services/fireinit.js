import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyBJ4USe7vOn1OzKfbkRSWap_P2HVlfE7ZM",
    authDomain: "nuxtcars.firebaseapp.com",
    databaseURL: "https://nuxtcars.firebaseio.com",
    projectId: "nuxtcars",
    storageBucket: "nuxtcars.appspot.com",
    measurementId: "G-2S4P3MKX1G"
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export default firebase