import { Component, OnInit } from '@angular/core';
import YingCh from '../yingch'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  yingch: YingCh = {
    studentId: 991549628,
    name: 'Ying Chen',
    loginName: 'yingch',
    campus: 'Davis',
    picture: '',
    assignmentTitle: 'Assignment3'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
