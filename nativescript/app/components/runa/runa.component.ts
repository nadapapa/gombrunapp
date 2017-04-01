import { Component, OnInit } from '@angular/core';
import { FileStorageService } from '../../services/file-storage.service';
import { RandomGrabovojService } from '../../services/random-grabovoj.service';
import { GrabovojModel } from '../../models/grabovoj.model';

import {registerElement} from "nativescript-angular/element-registry";
registerElement("VideoPlayer", () => require("nativescript-videoplayer").Video);

@Component({
  moduleId: String(module.id),
  selector: 'app-runa',
  templateUrl: './runa.component.html',
  styleUrls: ['./runa.component.css'],
  providers: [FileStorageService, RandomGrabovojService]
})
export class RunaComponent implements OnInit {
  public grabovoj: GrabovojModel = {number: '', text: ''};
  private filePath: string = '~/assets/texts.json';
  private interval: number = 20000;

  constructor(
      private FileStorageService : FileStorageService,
      private RandomService: RandomGrabovojService
  ) { }

  ngOnInit() {
    this.FileStorageService.setUrl(this.filePath);
    this.RandomService.getRandomGrabovojInterval(this.FileStorageService, this.interval)
        .subscribe((grabovoj) => {this.grabovoj = grabovoj});
  }


}
