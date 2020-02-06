import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-post',
  templateUrl: './get-post.component.html',
  styleUrls: ['./get-post.component.css']
})
export class GetPostComponent implements OnInit {

  constructor( private ht:  HttpClient) { }

  dis:any;
  obj=[
    
    {
      "id": 4,
    "title": "purush-server",
    "author": "dont-know"
    },
    {
      "id": 5,
      "title": "vijendar-server",
      "author": "typicode"
    }
  ];

  obj2=[
    {

    "title": "a",
    "author": "a"
    }
  ];

  ngOnInit() {


      this.ht.get('http://localhost:3000/posts').subscribe( response => {console.log(response);
      this.dis=response; });

       this.ht.post('http://localhost:3000/posts',this.obj).subscribe( response => {console.log(response);
      this.dis=response;})


  //  this.ht.put('http://localhost:3000/posts/2',this.obj2).subscribe( response => {console.log(response);
  //  this.dis=response;});

  
    // this.ht.delete('http://localhost:3000/posts/1').subscribe( response => {console.log(response);
    // this.dis=response; })


  }




}
