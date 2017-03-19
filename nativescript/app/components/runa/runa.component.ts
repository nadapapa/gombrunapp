import { Component, OnInit } from '@angular/core';
import { FileStorageService } from '../../services/file-storage.service';
import { RandomGrabovojService } from '../../services/random-grabovoj.service';
import { GrabovojModel } from '../../models/grabovoj.model';

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
  private interval: number = 5000;
  private imagePath: string;

  constructor(
      private FileStorageService : FileStorageService,
      private RandomService: RandomGrabovojService
  ) {

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
    this.FileStorageService.setUrl(this.filePath);
    // this.FileStorageService.getAll().subscribe((x) => console.log("===============data===================\n",JSON.stringify(x.json())));
    this.RandomService.getRandomGrabovojInterval(this.FileStorageService, this.interval)
        .subscribe((grabovoj) => {this.grabovoj = grabovoj});
  }


}
