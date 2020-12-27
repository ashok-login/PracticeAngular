import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myparent',
  templateUrl: './myparent.component.html',
  styleUrls: ['./myparent.component.css']
})
export class MyparentComponent implements OnInit {

  childData: string;

  constructor() { }

  ngOnInit() {
  }

  parentMethod(data: string) {
    this.childData = data;
  }
}
