import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-functions',
  templateUrl: './arrow-functions.component.html',
  styleUrls: ['./arrow-functions.component.css']
})
export class ArrowFunctionsComponent implements OnInit {

  constructor() {
    document.addEventListener('click', () => console.log('clicked')
      );
  }

  ngOnInit() {
  }

  sum = (a: number, b: number) => a + b;

  SayHello = (name: string) => 'Hello ' + name;
}
