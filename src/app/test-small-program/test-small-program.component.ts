import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-small-program',
  template: `
    <p>
      {{ htmlSnippet }}
    </p>
  `,
  styleUrls: ['./test-small-program.component.css']
})
export class TestSmallProgramComponent implements OnInit {
  htmlSnippet: any;
  constructor() { }

  ngOnInit() {
    this.htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  }
}
