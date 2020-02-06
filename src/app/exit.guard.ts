import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserComponent } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<UserComponent> {
  canDeactivate():boolean{
   if( confirm("Confirm to exit"))
    {
      return true;
    }
    else return false;
  }
  
}
