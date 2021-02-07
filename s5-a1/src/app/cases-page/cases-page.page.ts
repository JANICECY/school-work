import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cases-page',
  templateUrl: './cases-page.page.html',
  styleUrls: ['./cases-page.page.scss'],
})
export class CasesPagePage implements OnInit {
  report: String []
  message: String = ''
  constructor(private myService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadData()
  }


  newMessage(): void {
    this.myService.setMessage({ date: this.report[1], message: this.message })
    this.message = ""
  }

  loadData(): void {
    this.report = this.route.snapshot.params.report.split(",")
  }
}
