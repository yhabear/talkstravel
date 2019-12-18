import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }

}