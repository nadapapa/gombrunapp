import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../services/json.service';

@Component({
  moduleId: String(module.id),
  selector: 'app-runa',
  templateUrl: './runa.component.html',
  styleUrls: ['./runa.component.css'],
  providers: [JsonService]
})
export class RunaComponent implements OnInit {

  public number: string = '23432534534';
  public text: string = 'Ide jönnek a Grabovoj számok';

  constructor(private JsonService : JsonService) { }

  ngOnInit() {
    this.JsonService.getData().subscribe(val => console.log(val));
  }

}
