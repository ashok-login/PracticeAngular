import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input() public parentData; commented for later reference
  @Input('parentData') public name: string;

  constructor() { }

  ngOnInit() {
  }
}
