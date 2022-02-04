import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component implements OnInit {
  lastres?:any;
  calcForm?: any;

  resluts?:any=[];
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.createCalcForm();
  }
  createCalcForm() {
    this.calcForm = this.fb.group({
      in1: ['', [Validators.required]],
      in2: ['', [Validators.required]],
      operation: ['', [Validators.required]],
    })
  }
  onSubmit() {
    let date;
    let result;
    let operation;
    let currentRes:any={};
    date = new Date();
    console.log("submitted");
    console.log(this.calcForm.value);
    let a = parseFloat(this.calcForm.value.in1);
    let b = parseFloat(this.calcForm.value.in2);
    switch (this.calcForm.value.operation) {
      case "+":
        result=a+b;
        operation = a+" + "+b;
        console.log(a+b)
        break;
      case "-":
        result=a-b;
        operation = a+" - "+b;
        console.log(a - b);
        break;
      case "*":
        result=a*b;
        operation = a+" * "+b;
        console.log(a * b)
        break;
      case "/":
        result=a/b;
        operation = a+" / "+b;
        console.log(a / b)
        break;
      default:
        //
        break;
    }

    currentRes["date"]=date;
    currentRes["operation"]=operation;
    currentRes["result"]=result;
    this.lastres=result;
    //console.log(this.currentRes);
    //this.resluts[this.resluts.length]=this.currentRes;
    //console.log("results");
    //console.log(this.resluts);
    this.resluts.push(currentRes);
    console.log("results");
    console.log(this.resluts);

  }
  delElement(i:number){
    this.resluts = this.resluts.slice(0,i).concat(this.resluts.slice(i+1,this.resluts.length+1));
    console.log(this.resluts);
  }

}


