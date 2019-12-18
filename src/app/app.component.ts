import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'talkstravel';
  constructor() { }

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