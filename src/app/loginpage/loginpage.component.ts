import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { Admin } from '../admin';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
user:User[];
admin:Admin;
chk:boolean=false;
msg:string="";
  constructor(private adminservice:AdminService,private userservice:UserService,
    private builder:FormBuilder,private router:Router) {sessionStorage.clear(); }

  ngOnInit(): void {
this.adminservice.getadminbyid(1).subscribe(data=>
  {
this.admin=data;
  });
  this.userservice.getallusers().subscribe(data=>{
 this.user=data;
  });
  }

  loginform=this.builder.group({
    username:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)
  });

  actioncheck()
  {
     if(this.loginform.controls.username.value==this.admin.username && this.loginform.controls.password.value==this.admin.userpassword)
     {
      this.chk=true;
        sessionStorage.setItem('admindetail',this.admin.id.toString());
        this.router.navigate(['/adminhomepage']);
     }

    for(var i of this.user)
    {
      if(i.username==this.loginform.controls.username.value && i.userpassword==this.loginform.controls.password.value)
      {
        this.chk=true;
        sessionStorage.setItem('userdetail',i.userid.toString());
        this.router.navigate(['/userhomepage']);
      }
    }
    if(this.chk==false){
      this.msg="Please enter correct username or password";
    }
  

  }

}
