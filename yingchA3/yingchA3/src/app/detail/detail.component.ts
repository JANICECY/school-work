import { Component, OnInit } from '@angular/core';
import { MYCLASSES } from '../../assets/data/myCourses'
import Course from '../courseInfo';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  myclasses = MYCLASSES;
  selectedCourse: Course = MYCLASSES[0];
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onClickCourseCode(index) {
    this.selectedCourse = MYCLASSES[index]
  }
}
