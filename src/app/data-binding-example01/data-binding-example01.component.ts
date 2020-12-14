import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-example01',
  templateUrl: './data-binding-example01.component.html',
  styleUrls: ['./data-binding-example01.component.css']
})
export class DataBindingExample01Component implements OnInit {
  isDisabled = true
  constructor() { }

  ngOnInit() {
    this.enableButtonAfterCertainPeriod();
  }
  enableButtonAfterCertainPeriod(): void {
    setTimeout(() => {
      this.isDisabled = false;
    }, 2000);
  }

  validateSaveChanges(): void {
    
  }
}
