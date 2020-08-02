import { Component, OnInit } from '@angular/core';
import { PersonlddataService } from './personlddata.service'
import Yingch from './yingch'
import { Food } from './Food'
import breakfast from '../assets/data/breakfast.json'
import lunch from '../assets/data/lunch.json'
import dinner from '../assets/data/dinner.json'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'yingch-A4';
  yingch: Yingch;
  breakfastList: Food[] = breakfast.items;
  lunchList: Food[] = lunch.items;
  dinnerList: Food[] = dinner.items;
  

  constructor(private myService: PersonlddataService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.yingch = this.myService.loadData()
  }
}
