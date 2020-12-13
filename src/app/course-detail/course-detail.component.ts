import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../_model/Course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input()
  courses: Course[];
  constructor() { }

  ngOnInit() {
  }

}
