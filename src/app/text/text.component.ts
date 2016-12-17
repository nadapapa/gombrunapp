import { Component } from 'nativescript-ng2-magic';
import { OnInit } from '@angular/core';

@Component({
  moduleId: String(module.id),
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
