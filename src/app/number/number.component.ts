import { Component } from 'nativescript-ng2-magic';
import { OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {
  @Input() number: string;

  private chars: Array<string>;

  constructor() { }

  ngOnInit() {
    this.chars = this.number.trim().split('');
  }

}
