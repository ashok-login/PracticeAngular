import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-ref',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.css']
})
export class TemplateReferenceVariableComponent implements OnInit {

  data = {
    title: 'Learning Angular'
  };

  constructor() { }

  ngOnInit() {
  }

  keyup(inputVar: string) {
    this.data.title = inputVar;
  }

}
