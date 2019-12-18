import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
declare var $: any;
=======
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';

declare var $:any;
>>>>>>> 52fdcb3df3b4b084148e74bc0274a85893336705

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  title = 'talkstravel';
<<<<<<< HEAD
  constructor(
    private router: Router,
    private auth: AuthService) { }
=======
  description = 'Angular-Fire-Demo';

  itemValue = '';
  items: Observable<any[]>;

  constructor() {
    
   }
>>>>>>> 52fdcb3df3b4b084148e74bc0274a85893336705

  ngOnInit() {
    $(document).ready(function () {
      var navbar = $('.navbar');
      var origOffsetY = navbar.offset().top;
      function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
          $('.navbar').addClass('sticky');
          $('.container').addClass('navbar-padding');
        } else {
          $('.navbar').removeClass('sticky');
          $('.container').removeClass('navbar-padding');
        }
      }
      document.onscroll = scroll;
    });
  }

}
