import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  ngOnInit() {
    
  }

  constructor(private ht:FormBuilder, private hp:HttpClient, private r:Router) {  }

   dis:any;

   myform=this.ht.group({
   username:['',Validators.required],
    password:['',Validators.required]
  
  })
  
  

  fn(){
  if(this.myform.value.username==18164 && this.myform.value.password=="Ojas1525")
  {
    this.hp.post('http://192.168.1.155:8089/login',this.myform.value).subscribe( response => {  console.log(response); 
  
   this.dis= response['authorization'];
   localStorage.setItem('Token',this.dis);
   alert('Login success, token generated');
   this.myform.reset(); 

  })
  }

  else{
    alert('Username or Password Invalid');
    this.myform.reset();
  }

}

an(){
  localStorage.removeItem('Token');
  this.dis=null;  
  this.r.navigate(['/user']);
}


}
