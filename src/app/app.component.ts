import { Component } from '@angular/core';
import {ToneAnalyzerV3} from 'watson-developer-cloud/tone-analyzer/v3';
// import * as firebase from 'firebase';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // variables
  key:string;
  // constructor taking in a service, our api
  constructor(private dataService:DataService) {
    console.log("init app.component...");
  }

  // on btn click, gets the text.
  // sends the message up to firebase to activate a onWrite trigger.
  // Then inits a listener for a response.
  getText(text:string) {
    document.getElementById("spinner").style.visibility = "visible";
    console.log(text);
    this.dataService.postMessage(text);
    this.key = this.dataService.getKey();
    this.dataService.assignListener(this.key);
    return false;
  }

}
