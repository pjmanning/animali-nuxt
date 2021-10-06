import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyCc4mj6ZFm58kvFIbiUszAI5fAsDAMHBeE',
    authDomain: 'animali-life.firebaseapp.com',
    databaseURL: 'https://animali-life.firebaseio.com',
    projectId: 'animali-life',
    storageBucket: 'animali-life.appspot.com',
    messagingSenderId: '112167594202',
    appId: '1:112167594202:web:f5cf3f319ce1beb4ca5de3',
    measurementId: 'G-YGPEPDGQY1'
}

// eslint-disable-next-line import/no-mutable-exports
let firebaseApp

const apps = getApps()
if (!apps.length) {
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = apps[0]
}

export const auth = getAuth(firebaseApp)
export const firestore = getFirestore(firebaseApp, {})
export const storage = getStorage(firebaseApp)

export default firebaseApp
