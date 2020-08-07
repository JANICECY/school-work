import { Component, OnInit } from '@angular/core';
import { PersonlddataService } from './personlddata.service'
import Yingch from './yingch'
import { Food } from './Food'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'yingch-A4';
  yingch: Yingch;
  breakfastList: Food[];
  lunchList: Food[]
  dinnerList: Food[];
  

  constructor(private myService: PersonlddataService) {
  }

  ngOnInit() {
    this.loadData();
    this.loadMenus();
  }

  loadData(): void {
    this.yingch = this.myService.loadData()
  }

  loadMenus():void {
    const { breakfast, lunch, dinner } = this.myService.loadMenus()
    this.breakfastList = breakfast;
    this.lunchList = lunch;
    this.dinnerList = dinner
  }
}
