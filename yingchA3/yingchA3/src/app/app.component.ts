import { Component } from '@angular/core';
import YingCh from './yingch'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yingchA3';
  yingch: YingCh = {
    studentId: 991549628,
    name: 'Ying Chen',
    loginName: 'yingch',
    campus: 'Davis',
    picture: '',
    assignmentTitle: 'Assignment3'
  }
}
