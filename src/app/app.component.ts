import { Component } from '@angular/core';
import {ToneAnalyzerV3} from 'watson-developer-cloud/tone-analyzer/v3';
import {database} from '@firebase/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firebaseConfig = {
      apiKey: "AIzaSyCOoDPAch2LpL-drAam3c4RcHdSDmNBNQk",
      authDomain: "toneanalyzer-ad40d.firebaseapp.com",
      databaseURL: "https://toneanalyzer-ad40d.firebaseio.com",
      projectId: "toneanalyzer-ad40d",
      storageBucket: "toneanalyzer-ad40d.appspot.com",
      messagingSenderId: "277910134969"
    };

    key:string;
    listener;

    constructor() {
      firebase.initializeApp(this.firebaseConfig);
    }

  getText(text:string) {
    document.getElementById("spinner").style.visibility = "visible";
    console.log(text);
    let database = firebase.database();
    //send to database to activate trigger
    this.key = database.ref("Messages/").push().key;
    database.ref("Messages/").child(this.key).set({
      "text": text
    });

    this.listener = database.ref("Messages/").child(this.key).child("/Response/").on('value', function(snap){
      if(snap.val()){
        console.log("Response: " , snap.val());
        document.getElementById("spinner").style.visibility = "hidden";
        document.getElementById("json").innerHTML = JSON.stringify(snap.val(), undefined, 2);
      }
    });

    return false;
  }

}
