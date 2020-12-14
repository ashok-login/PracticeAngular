import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-example01',
  templateUrl: './data-binding-example01.component.html',
  styleUrls: ['./data-binding-example01.component.css']
})
export class DataBindingExample01Component implements OnInit {
  isDisabled = true;
  contentToSave = "";
  constructor() {
    this.enableButtonAfterCertainPeriod();
    if(this.contentToSave === "") {
      this.isDisabled = true;
    }
  }

  ngOnInit() {
  }
  enableButtonAfterCertainPeriod(): void {
    setTimeout(() => {
      this.isDisabled = false;
    }, 2000);
  }

  validateSaveChanges(event: Event): void {
    this.contentToSave = (event.target as HTMLInputElement).value;
    if(this.contentToSave == "") {
      this.isDisabled = true;
    }
    else if(this.contentToSave != "") {
      this.isDisabled = false;
    }
  }

  SaveContent(event: Event): void {

  }
}
