import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  getTransactions(){
    return this.http.get("http://localhost:3000/transactions");
  }
  getTransactionsFilter(key:any,ordre:any){
    return this.http.get("http://localhost:3000/transactions?_sort="+key+"&_order="+ordre);
  }
  getDetails(id:any){
    return this.http.get("http://localhost:3000/details/"+id);
  }
}
