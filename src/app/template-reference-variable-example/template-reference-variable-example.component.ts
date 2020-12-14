import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable-example',
  templateUrl: './template-reference-variable-example.component.html',
  styleUrls: ['./template-reference-variable-example.component.css']
})
export class TemplateReferenceVariableExampleComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  LogMessage(input): void {
    console.log(input);
    console.log(input.value);
  }
}
