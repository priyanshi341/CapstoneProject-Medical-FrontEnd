import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  urlmap:any;
  constructor(private router:Router,private adminservice:AdminService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.adminservice.checkadmin()==true)
    {
      this.urlmap=route.url[0].path;
      if(this.urlmap=="addcategory" || this.urlmap=="addproduct" || this.urlmap=="adminhomepage" || this.urlmap=="ordersdisplay"
      || this.urlmap=="viewallbyadmin")
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
