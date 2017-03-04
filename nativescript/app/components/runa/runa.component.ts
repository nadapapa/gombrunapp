import { Component, OnInit } from '@angular/core';
import {registerElement} from "nativescript-angular/element-registry";
registerElement("Gif", () => require("nativescript-gif").Gif);

@Component({
  moduleId: String(module.id),
  selector: 'app-runa',
  templateUrl: './runa.component.html',
  styleUrls: ['./runa.component.css']
})
export class RunaComponent implements OnInit {

  public number: string = '23432534534';
  public text: string = 'Ide jönnek a Grabovoj számok';
  public imagePath: string;

  constructor() {

    let l = 0;

    setInterval(() => {
      ++l;
      this.imagePath = '~/assets/frames/frame_'+l+'_delay-0.03s.gif';
      if (l === 179) {
        l = 0;
      }
    }, 30);
  
   }

  ngOnInit() {
  }


}
