import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable, timer } from "rxjs";

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {
  items :Observable<any[]>
  constructor(public db : AngularFireDatabase) { 
    this.items = db.list('provinc').valueChanges();
  }

  ngOnInit() {
  }

}
