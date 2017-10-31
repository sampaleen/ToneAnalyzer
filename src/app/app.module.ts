import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextfieldComponent } from './textfield/textfield.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {DataService} from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    TextfieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
