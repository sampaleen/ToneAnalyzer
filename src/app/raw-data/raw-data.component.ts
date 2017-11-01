import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-raw-data',
  templateUrl: './raw-data.component.html',
  styleUrls: ['./raw-data.component.css']
})
export class RawDataComponent implements OnInit {
  data = "Please go back to tone analyzer and enter text.";
  constructor(private dataService:DataService) {

  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.data = message);
  }

}
