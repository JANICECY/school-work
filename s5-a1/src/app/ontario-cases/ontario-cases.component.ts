import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ontario-cases',
  templateUrl: './ontario-cases.component.html',
  styleUrls: ['./ontario-cases.component.scss'],
})
export class OntarioCasesComponent implements OnInit {

  statusOfCases: Object = {
    "Total Cases": 273660,
    "Resolved": 250937,
    'Deaths': 6393,
    "Hospitalized": 1101,
    "ICU": 323,
    "Ventilator": 241,
  }



  constructor() { }

  ngOnInit() {}

}
