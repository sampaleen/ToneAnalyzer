import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {DataService} from './services/data.service';
import {MatToolbarModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { RawDataComponent } from './raw-data/raw-data.component';
import { ToneComponent } from './tone/tone.component'

const appRoutes: Routes = [
  {path:'home', component: ToneComponent},
  { path: 'raw-data', component: RawDataComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component:ToneComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RawDataComponent,
    ToneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
