import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthbuttonComponent } from './authbutton/authbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-rfnak8to.us.auth0.com',
      clientId: 'C7wDCwEbMAa9jPm9fLk8u9ZZQx9yORAp'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent, AuthbuttonComponent]
})
export class AppModule { }
