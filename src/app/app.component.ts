import { Component } from '@angular/core';
import * as request from 'request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getText(text:string) {
    console.log(text);
    // api call starts here
    this.makeRequest("");
    return false;
  }


  makeRequest(text:string) {

    let creds = {
        "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
        "username": "1115bafc-e711-4e1d-8603-1f69d3abfcf7",
        "password": "NPmWUXbkXcyg"
      }

    //var request = require('request');
    var headers = {
        'Content-Type': 'application/json'
    };
    var dataString = JSON.stringify({"text" : "Team, I know that times are tough! Product sales have been disappointing for the past three quarters. We have a competitive product, but we need to do a better job of selling it!"});
    var options = {
        url: creds.url,
        method: 'POST',
        headers: headers,
        body: dataString,
        auth: {
            'user': creds.username,
            'pass': creds.password
        }
    };
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
    request(options, callback);

  }

}
