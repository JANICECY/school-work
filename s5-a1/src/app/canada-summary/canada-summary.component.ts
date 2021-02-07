import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-canada-summary',
  templateUrl: './canada-summary.component.html',
  styleUrls: ['./canada-summary.component.scss'],
})
export class CanadaSummaryComponent implements OnInit {

  keyUpdates: Object;
  constructor(private myService: DataService) { }

  ngOnInit() {
    this.loadData()
  }

  loadData(): void {
    this.keyUpdates = this.myService.loadKeyUpdates();
  }

}
