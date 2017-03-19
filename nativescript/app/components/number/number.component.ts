import { Component, OnChanges, OnInit, OnDestroy, Input } from '@angular/core';

// TODO nativescript animation currently does not support the changing of the color to the text. find something else.

@Component({
  moduleId: String(module.id),
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnChanges, OnDestroy, OnInit {
  @Input() number: string;

  private chars = [];
  private numbers: Array<string>;
  private interval;
  private numberLength: number;

  private colors: Array<string> = [
      'd65c97', '5cd666', 'a55cd6', '5c7cd6', 'd65c7a',
      '81d65c', '835cd6', '685cd6', '5c9dd6', '5cd670',
      'd6625c', 'd6835c', 'd6605c', 'be5cd6', '5c8dd6',
      '95d65c', 'd69d5c', 'd65c81', '5cd666', 'd67e5c'
  ];

  ngOnChanges() {
    this.numbers = this.convertStringToArray(this.number);
    this.numberLength = this.numbers.length;
  }

  ngOnInit() {
    let iteration = 0;
    let colorLength = this.colors.length;

    this.interval = setInterval(() => {
      if (iteration >= colorLength) {
        iteration = 0;
      }

      this.chars = this.numbers.map((item, index) => {
        let colorIndex = iteration + index;

        if (colorIndex >= colorLength) {
          colorIndex = (iteration + index) - colorLength;
        }

        return {char: item, color: '#' + this.colors[colorIndex]};
      });

      ++iteration;
    }, 200);
  }

  private convertStringToArray(string: string) {
    return string.trim().split('');
  }

  ngOnDestroy () {
    clearInterval(this.interval);
  }
}
