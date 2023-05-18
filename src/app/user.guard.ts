import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  urlmap:any;
  constructor(private router:Router,private userservice:UserService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userservice.checkuser()==true)
      {
        this.urlmap=route.url[0].path;
        if(this.urlmap=="viewallbyuser" || this.urlmap=="usercart" ||this.urlmap=="paynow"
        || this.urlmap=="vieworder"|| this.urlmap.match("viewproduct") || this.urlmap=="userhomepage")
        {
          return true;
        }
      }
      else{
        this.router.navigate(['login']);
        return false;
      }
    return false;
  }
  
}
