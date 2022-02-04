import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tpAngular';
  num = 0;
  changeForm(i:number){
    this.num = i;
    
  }
}
