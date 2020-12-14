import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-bining-example',
  templateUrl: './style-bining-example.component.html',
  styleUrls: ['./style-bining-example.component.css']
})
export class StyleBiningExampleComponent implements OnInit {
  hasError = false;
  highlightColor = "Orange";
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  };
  constructor() { }
  ngOnInit() {
  }
}
