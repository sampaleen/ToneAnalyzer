import { Injectable } from '@angular/core';
import {database} from '@firebase/database';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  // firebase config
  firebaseConfig = {
      apiKey: "AIzaSyCOoDPAch2LpL-drAam3c4RcHdSDmNBNQk",
      authDomain: "toneanalyzer-ad40d.firebaseapp.com",
      databaseURL: "https://toneanalyzer-ad40d.firebaseio.com",
      projectId: "toneanalyzer-ad40d",
      storageBucket: "toneanalyzer-ad40d.appspot.com",
      messagingSenderId: "277910134969"
    };

  // variables
  key:string;
  listener:any;

  private messageSource = new BehaviorSubject<string>("Please go to tone analyzer and enter text and wait until it has finished loading.");
  currentMessage = this.messageSource.asObservable();

  // service constructor
  constructor() {
    console.log("data service connected ..");
    firebase.initializeApp(this.firebaseConfig);
  }

  changeMessage(message:string) {
    this.messageSource.next(message);
  }

  // post input text to firebase
  postMessage(text:string) {
    let database = firebase.database();
    //send to database to activate trigger
    this.key = database.ref("Messages/").push().key;
    database.ref("Messages/").child(this.key).set({
      "text": text
    });
  }

  // getter for unique key genereated in post
  getKey() {
    return this.key;
  }

  // // getter for json data returned
  // getData() {
  //   return this.data;
  // }

  // assigns a listener to automatically update screen when the firebase function
  // has retieved the data from the watson api call.
  assignListener(key:string){
    let database = firebase.database();
    let that = this;
    this.listener = database.ref("Messages/").child(key).child("/Response/").on('value', function(snap){
      if(snap.val()){
        console.log("Response: " , snap.val());
        document.getElementById("spinner").style.visibility = "hidden";
        //document.getElementById("json").innerHTML = JSON.stringify(snap.val(), undefined, 2);
        document.getElementById("go").innerHTML = "Please click raw data to view output!";
        console.log("changing message");
        that.changeMessage(JSON.stringify(snap.val(), undefined, 2));
      }
    });
  }

}
