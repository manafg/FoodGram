import firebase from 'firebase';

const config ={
    apiKey: "AIzaSyBvzFzvuW5GZ5Z3jGZ-ojBLTaLnGKijvbo",
    authDomain: "foodapp-c6f68.firebaseapp.com",
    databaseURL: "https://foodapp-c6f68.firebaseio.com",
    projectId: "foodapp-c6f68",
    storageBucket: "foodapp-c6f68.appspot.com",
    messagingSenderId: "493772030896"
  };
  firebase.initializeApp(config);




export default class ConfigStore {
constructor () {
    firebase.initializeApp(config)
    this.splashTime = 1000
    this.splashImage = require('');
    this.loginBG = require('');
}

    get SplashImage(){
        return this.splashImage;
    }

    get SplashTime(){
        return this.splashTime;
    }

    get imageBG (){
        return this.loginBG;
    }
}
