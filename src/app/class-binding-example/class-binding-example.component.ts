import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-class-binding-example",
  templateUrl: "./class-binding-example.component.html",
  styleUrls: ["./class-binding-example.component.css"],
})
export class ClassBindingExampleComponent implements OnInit {
  public successClass = "text-success";
  public hasError = true;
  constructor() {}

  ngOnInit() {}
}
