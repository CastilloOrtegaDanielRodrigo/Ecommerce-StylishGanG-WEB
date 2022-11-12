import app from 'firebase/compat/app';
import firebaseConfig from './config'; 
import 'firebase/compat/firestore';
class Firebase {
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig)
        }
        this.db = app.firestore()
    }
}

const firebase = new Firebase();
export default firebase;