import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private ht:ActivatedRoute) { }
  id:number;
  name:string;
  cost:number;
  pic:string;

  ngOnInit() {

    this.id=this.ht.snapshot.params.id;
    this.name=this.ht.snapshot.params.name;
    this.cost=this.ht.snapshot.params.cost;
    this.pic=this.ht.snapshot.params.pic;
  }

}
