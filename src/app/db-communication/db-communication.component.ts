import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-db-communication',
  templateUrl: './db-communication.component.html',
  styleUrls: ['./db-communication.component.css']
})
export class DbCommunicationComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private data: any;
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('http://localhost:5000/api/values/')
        .subscribe(response => {
          this.data = response;
        }, error => {
          console.log(error);
        });
  }
}
