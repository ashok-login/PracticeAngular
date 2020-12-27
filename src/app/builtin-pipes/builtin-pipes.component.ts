import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtin-pipes',
  templateUrl: './builtin-pipes.component.html',
  styleUrls: ['./builtin-pipes.component.css']
})
export class BuiltinPipesComponent implements OnInit {
  public name = "TollPlus India Pvt.Ltd.";
  public message = "Welcome to TollPlus India Pvt.Ltd.";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  };

  public date = new Date();
  constructor() { }

  ngOnInit() {
  }
}
