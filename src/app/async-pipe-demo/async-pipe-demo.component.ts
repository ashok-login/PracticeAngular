import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Course } from '../_model/Course';
import { Observable } from 'rxjs';
import { COURSES } from '../_model/db-data';
import { Department } from '../_model/department';

@Component({
  selector: 'app-async-pipe-demo',
  templateUrl: './async-pipe-demo.component.html',
  styleUrls: ['./async-pipe-demo.component.css']
})
export class AsyncPipeDemoComponent implements OnInit {
  protected departments$: Observable<Department[]>;
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'https://localhost:44323/api/Departments';
  }

  ngOnInit() {
    this.departments$ = this.http.get<Department[]>(this.apiUrl);
    let test = this.departments$;
  }

  // getDepartments(): Observable<Department[]> {
  //   this.departments$ = this.http.get(this.apiUrl);
  // }
}
