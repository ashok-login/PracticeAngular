import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive-example',
  templateUrl: './ng-for-directive-example.component.html',
  styleUrls: ['./ng-for-directive-example.component.css']
})
export class NgForDirectiveExampleComponent implements OnInit {
  public favoriteColors = ["Red", "Orange", "Green", "Cyan"];
  constructor() { }

  ngOnInit() {
  }

}
