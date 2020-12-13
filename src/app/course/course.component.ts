import { Component, OnInit } from '@angular/core';
import { Course } from '../_model/Course';
import { COURSES } from '../_model/db-data';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  protected courses: Course[];

  constructor() { }

  ngOnInit() {
    this.courses = COURSES;
  }
}
