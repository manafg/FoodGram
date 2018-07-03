import {action} from 'mobx';
import firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store';

export default class MatchStore extends MobxFirebaseStore {
    constructor () {
        super (firebase.database().ref())
        firebase.auth().onAuthStateChanged((user)=>{
            this.user = user;
        })
    }

    resolveFirebaseQuery(sub){
        return this.fb.child(syb.path).orderByChild('viwedBy/'+this.user.uid).equalTo(null)
    }

    @action 
    markViewed(post){
let updates = {};
this.fb.child('posts').child(post).update(updates);

    }
    subs () {
        return [{
            subKey: 'matches',
            path: 'posts',
            asList: true,
            user: this.user
        }]
    }

}