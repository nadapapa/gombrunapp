import { Component, Input } from '@angular/core';

@Component({
  moduleId: String(module.id),
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {
  @Input() number: string;
}
