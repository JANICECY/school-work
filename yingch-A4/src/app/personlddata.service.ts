import { Injectable } from '@angular/core';
import { yingch } from '../assets/data/myinfo'
import YingCh from './yingch'
import breakfast from '../assets/data/breakfast.json'
import lunch from '../assets/data/lunch.json'
import dinner from '../assets/data/dinner.json'

@Injectable({
  providedIn: 'root'
}) 
export class PersonlddataService {
  myinfo = yingch
  loadData(): YingCh {
    return yingch
  }

  loadMenus() {
    return { breakfast: breakfast.items, lunch: lunch.items, dinner: dinner.items }
  }
}
