import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'today18';


constructor(private ht :HttpClient){

}

details:any;
obj=[
  {
    "ename":"purush",
    "email":"purush@gmail.com",
    "phonenumber":"99123"
  }
];

ngOnInit(){

  //    this.ht.get('http://192.168.2.235:8090/api/Values').subscribe( response=> { console.log(response);
  // this.details=response;

  this.ht.post('http://192.168.2.235:8090/api/Values',this.obj).subscribe( response=> { console.log(response)

});

   


}

}
