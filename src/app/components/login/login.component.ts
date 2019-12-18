import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }

}