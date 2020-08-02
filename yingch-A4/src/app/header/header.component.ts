import { Component, OnInit, Input } from '@angular/core';
import Yingch from '../yingch'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() yingch: Yingch
  constructor() { }

  ngOnInit(): void {
  }

}
