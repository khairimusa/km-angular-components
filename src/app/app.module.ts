// angular import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// km project import
import { AppComponent } from './app.component';
import { KmToolbarComponent } from './components/km-toolbar/km-toolbar.component';
import { KmCardComponent } from './components/km-card/km-card.component';

// 3rd party import
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    KmToolbarComponent,
    KmCardComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
