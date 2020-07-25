import { Component, OnInit } from '@angular/core';
import YingCh from '../yingch'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  yingch: YingCh = {
    studentId: 991549628,
    name: 'Ying Chen',
    loginName: 'yingch',
    campus: 'Davis',
    picture: '../../assets/images/pic.jpg',
    assignmentTitle: 'Assignment3'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
