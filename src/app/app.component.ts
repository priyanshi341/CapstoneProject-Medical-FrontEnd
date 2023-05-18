import { Component, OnInit } from '@angular/core';
import { DoCheck } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  isnavbar=false;
  isnavbaruser=false;
  isnavbaradmin=false;
  isnavbarlogin=false;
  title = 'MedicalCapstoneProject';
  constructor(private router:Router){
    
  }
  ngOnInit(): void{
 
}

	

  ngDoCheck(): void {
       var uri=this.router.url;
       if(uri=="/")
       {
        this.isnavbar=true;
        this.isnavbaradmin=false;
        this.isnavbaruser=false;
        this.isnavbarlogin=false;
       }
       else if(uri=="/viewallbyuser" ||uri=="/usercart" ||uri=="/paynow"|| uri=="/vieworder"||
       uri.match('/viewproduct'))
       {
        this.isnavbar=false;;
        this.isnavbaruser=true;
        this.isnavbaradmin=false;
        this.isnavbarlogin=false;
       }
       else if(uri=="/addcategory" ||uri=="/addproduct" || uri=="/viewallbyadmin" || uri.match("/updateproduct")
       || uri=="/ordersdisplay")
       {
        this.isnavbar=false;;
        this.isnavbaruser=false;
        this.isnavbaradmin=true;
        this.isnavbarlogin=false;
       }
       else if(uri=="/login" ||uri=="/adduser" || uri=="/forgotpassword")
       {
        this.isnavbar=false;
        this.isnavbaradmin=false;
        this.isnavbaruser=false;
        this.isnavbarlogin=true;
        
       }
       else{
        this.isnavbar=false;
        this.isnavbaradmin=false;
        this.isnavbaruser=false;
        this.isnavbarlogin=false;
       }
  }
}
