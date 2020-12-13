import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-example01',
  templateUrl: './property-binding-example01.component.html',
  styleUrls: ['./property-binding-example01.component.css']
})
export class PropertyBindingExample01Component implements OnInit {
  isDisabled = true;
  constructor() { }

  ngOnInit() {
    this.EnableButtonAfterCertainTime();
  }

  EnableButtonAfterCertainTime(): void {
    setTimeout(() => { this.isDisabled = false; }, 2000);
  }
}
