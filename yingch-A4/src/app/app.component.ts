import { Component, OnInit } from '@angular/core';
import { PersonlddataService } from './personlddata.service'
import Yingch from './yingch'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'yingch-A4';
  yingch: Yingch;
  constructor(private myService: PersonlddataService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData():void {
    this.yingch = this.myService.loadData()
  }
}
