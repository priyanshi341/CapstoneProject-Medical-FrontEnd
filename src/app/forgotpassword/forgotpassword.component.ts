import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';
import { Admin } from '../admin';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
admin:Admin;
user:User[];
adminid:number=0;
userid:number=0;
chk:boolean=false;
msg:string="";
getuser:User;
getadmin:Admin;
msgchk:boolean=false;
  constructor(private builder:FormBuilder,private adminservice:AdminService,private userservice:UserService) { }

  ngOnInit(): void {
    this.adminservice.getadminbyid(1).subscribe(data=>{
   this.admin=data;
    });
    this.userservice.getallusers().subscribe(data=>
      {
        this.user=data;
      });
  }

   forgotform=this.builder.group({
    email:this.builder.control('',Validators.required)
   });


   changeform=this.builder.group({
    newpassword:this.builder.control('',Validators.required),
    confirmpassword:this.builder.control('',Validators.required)
   });

   buttonaction()
   {
   
    if(this.admin.username==this.forgotform.controls.email.value)
    {
      this.msg="";
      this.adminid=this.admin.id;
      this.chk=true;
      
    }
    else {
       for(var i of this.user)
       {
        if(this.forgotform.controls.email.value==i.useremail)
        {
          this.msg="";
          this.chk=true;
          this.userid=i.userid;
        }
       }
       if(this.chk==false)
       {
        this.msg="Wrong Email";
       
       }
    }
      
   }

   changeaction()
   {
     if(this.changeform.controls.newpassword.value==this.changeform.controls.confirmpassword.value)
     {
       if(this.adminid!=0)
       {
         this.adminservice.getadminbyid(1).subscribe(data=>{
          var admin=new Admin(data.username,this.changeform.controls.newpassword.value);
          this.adminservice.updateadmin(this.adminid,admin).subscribe(data=>{
            this.msgchk=true;
            this.msg="password changes successfully";

          });
         });
       }
       else{
        this.userservice.getuserbyid(this.userid).subscribe(data=>{
        var user=new User(data.username,data.useremail,data.useraddress,data.userphone,this.changeform.controls.newpassword.value);
         this.userservice.updateuser(this.userid,user).subscribe(data=>{
          this.msgchk=true;
          this.msg="password changed successfully";
         })
        });
       }
     }
     else{
      this.msg="New Password and Confirm Password didn't matched";
     }
   }
}
