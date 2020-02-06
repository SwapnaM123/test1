import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtectGuard implements CanActivate {
 canActivate():boolean{

 var a= localStorage.getItem('Token');
  
 if(a)
 {
  return true;
 }
 else return false;
}


}
