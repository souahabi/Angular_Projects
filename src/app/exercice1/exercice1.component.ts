import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {
  nameForm?:any;
  mode=0;
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.createNameForm();
  }
  createNameForm(){
    this.nameForm = this.fb.group({
      name: ['', [Validators.required]],
      font: ['auto', [Validators.required]],
      size: ['15', [Validators.required]],
      alignement: ['', [Validators.required]],
    })
  }
  onSubmit(){
    this.mode=1;
    console.log("submitted");
    console.log(this.nameForm.value);
  }

}
