import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  title = 'talkstravel';
  constructor(
    private router: Router,
    private auth: AuthService) { }

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
