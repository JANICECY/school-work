import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-ontario',
  templateUrl: './ontario.component.html',
  styleUrls: ['./ontario.component.scss'],
})
export class OntarioComponent implements OnInit {

  messages: Object[] = [{ date: '5/8/2020', message: "Follow Up " }]
  selections: Object;

  constructor(private myService: DataService) { }

  ngOnInit() {
    this.loadData()
    this.myService.sharedMessage.subscribe(i => {
      if (i['message']) // push to array only if the message is not empty 
        this.messages.push(i)
    })
  }

  loadData(): void {
    this.selections = this.myService.loadSelections().map(i => {
      i[1] = new Date(i[1]).toLocaleDateString()
      return i 
    })
  }
}
