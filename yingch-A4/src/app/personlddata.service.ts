import { Injectable } from '@angular/core';
import { yingch } from '../assets/data/myinfo'
import YingCh from './yingch'
@Injectable({
  providedIn: 'root'
}) 
export class PersonlddataService {
  myinfo = yingch
  loadData(): YingCh {
    return yingch
  }
}
