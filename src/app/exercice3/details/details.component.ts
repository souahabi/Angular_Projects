import { HttpServiceService } from './../../services/http-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id?:any;
  details?:any;
  constructor(private route: ActivatedRoute,private httpService:HttpServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.httpService.getDetails(this.id).subscribe(res=>{
      this.details = res;
    })
  }

}
