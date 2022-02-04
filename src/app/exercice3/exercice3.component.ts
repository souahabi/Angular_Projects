import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.scss']
})
export class Exercice3Component implements OnInit {
  time?:any;
  constructor() { }

  ngOnInit(): void {
    this.time = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toUTCString()), 1000); 
    });
  }


}
