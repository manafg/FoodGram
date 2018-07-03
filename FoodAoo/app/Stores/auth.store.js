import {observable, action} from 'mobx';
import firebase from 'firebase';
import { Promise } from 'core-js/library/web/timers';

export default class AuthStore {
    @obeservable authUser = null ;

    constructor() {
        firebase.auth().onAuthStateChanged((user)=>{
            this.authUser = user;
        })
    }
    @action
    signIn({email ,password}){
        if(this.authUser){
            return Promise.resolve.apply(this.authUser)
        }else {
            return firebase.auth.signInWithEmailAndPassword(email ,password)
        }
    }

}