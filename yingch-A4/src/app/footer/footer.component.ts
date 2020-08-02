import { Component, OnInit, Input } from '@angular/core';
import Yingch from '../yingch'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() yingch: Yingch
  constructor() { }

  ngOnInit(): void {
  }

}
