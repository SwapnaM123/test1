import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor(private ht:HttpClient) {  }

display(){
  return this.ht.get(' http://localhost:3000/products');
}




}
