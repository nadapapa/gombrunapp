import { Component } from '../decorators/magic.component';

@Component({
  moduleId: String(module.id),
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
