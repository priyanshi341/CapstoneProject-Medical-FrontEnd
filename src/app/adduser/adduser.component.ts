import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
user:User[];
chk:boolean=false;
msg:string="";
  constructor(private builder:FormBuilder,private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getallusers().subscribe(data=>{
 this.user=data;
    });

  }

  userform=this.builder.group({
    username:this.builder.control('',Validators.required),
    useremail:this.builder.control('',Validators.required),
    useraddress:this.builder.control('',Validators.required),
    userphone:this.builder.control('',Validators.required),
    userpassword:this.builder.control('',[Validators.required,Validators.minLength(8),Validators.pattern('[a-z0-9]+[A-Z]+')])
  });
  signupaction()
  {
    for(var i of this.user)
    {
      if(this.userform.controls.username.value==i.username || this.userform.controls.useremail.value==i.userpassword)
      {
        this.chk=true;
         this.msg="User Already Exist";
         
      }
    }
    if(this.chk==false){
   this.userservice.saveuser(this.userform.value).subscribe(data=>{
    this.router.navigate(['login']);
   });
  
   
  }
  }
}
