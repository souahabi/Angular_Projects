import { HttpServiceService } from './../../services/http-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  transactions:any;
  constructor(private httpService:HttpServiceService,private router: Router) { }

  ngOnInit(): void {
    this.httpService.getTransactions().subscribe(res=>{
      this.transactions = res;
    })
  }
  getdetails(id:any){
      this.router.navigateByUrl("/exercice3/details/"+id);
  }
  filter(id:any,ordre:any){
    this.httpService.getTransactionsFilter(id,ordre).subscribe(res=>{
      this.transactions = res;
    })
  }
}
