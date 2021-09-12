import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Inject } from '@angular/core'; 
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-authbutton',
  templateUrl: './authbutton.component.html',
  styleUrls: ['./authbutton.component.scss']
})
export class AuthbuttonComponent {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}


}
