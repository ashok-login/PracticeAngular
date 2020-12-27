import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mychild',
  templateUrl: './mychild.component.html',
  styleUrls: ['./mychild.component.css']
})
export class MychildComponent implements OnInit {
  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  ngOnInit() {
  }

  passData() {
    this.notify.emit('This message is coming from child component');
  }
}
