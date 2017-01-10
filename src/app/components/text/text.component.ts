import { Component } from '../../decorators/magic.component';
import { OnInit, Input } from '@angular/core';

@Component({
  moduleId: String(module.id),
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() text: string;
  private fontSize: string = "5vw";

  constructor() { }

  ngOnInit() {
  }

}
