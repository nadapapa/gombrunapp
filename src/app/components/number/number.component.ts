import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  moduleId: String(module.id),
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnChanges {
  @Input() number: string;

  private chars: Array<string>;

  ngOnChanges() {
    this.chars = this.convertStringToArray(this.number);
  }

  private convertStringToArray(string: string) {
    return string.trim().split('');
  }
}
