import { Component } from '../../decorators/magic.component';
import { OnInit } from '@angular/core';

@Component({
  moduleId: String(module.id),
  selector: 'app-runa',
  templateUrl: './runa.component.html',
  styleUrls: ['./runa.component.css']
})
export class RunaComponent implements OnInit {

  public number: string = '23432534534';
  public text: string = 'Ide jönnek a Grabovoj számok';

  constructor() { }

  ngOnInit() {}

}
