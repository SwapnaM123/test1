import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(private s:SerService) {
    this.dis();
   }

  details:any;

  ngOnInit() {
   
  }
  
  dis(){
    this.s.display().subscribe(response => {console.log(response);
    this.details=response})
  }
}
