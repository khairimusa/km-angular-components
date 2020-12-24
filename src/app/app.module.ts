// angular import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// km project import
import { AppComponent } from './app.component';
import { KmToolbarComponent } from './components/km-toolbar/km-toolbar.component';
import { KmCardComponent } from './components/km-card/km-card.component';
import { MaterialModule } from './material/material.module';

// 3rd party import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    KmToolbarComponent,
    KmCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
