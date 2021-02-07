import { Injectable } from '@angular/core';
import PCIData from '../assets/data/PCICases.json'
import statusOfCasesJson from '../assets/data/OSOC.json'
import keyUpdatesJson from '../assets/data/keyUpdates.json'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  message = new BehaviorSubject('');

  sharedMessage = this.message.asObservable();

  setMessage(msg) {
    this.message.next(msg)
  }

  loadKeyUpdates() {
    return keyUpdatesJson
  }

  loadStatusOfCases() {
    return statusOfCasesJson
  }
  
  loadSelections() {
    return PCIData['records']
  }
}
