import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
    const config = {
        apiKey: 'AIzaSyAgdZoD03BClYKEjib8f8Q7_Kf3-NBYbMM',
        authDomain: "modelcars-bbc20.firebaseapp.com",
        databaseURL: "https://modelcars-bbc20.firebaseio.com",
        projectId: "modelcars-bbc20",
        storageBucket: "modelcars-bbc20.appspot.com",
        messagingSenderId: "950165571883"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({ timestampsInSnapshots: true })
}
const fireDb = firebase.firestore()
export { fireDb }