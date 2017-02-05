import { Component } from '../../decorators/magic.component';
import { OnInit, Input } from '@angular/core';

// TODO nativescript animation currently does not support the changing of the color to the text. find something else.

@Component({
  moduleId: String(module.id),
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
