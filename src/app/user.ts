export class User {
    
userid:number;
username:string;
useremail:string;
useraddress:string;
userphone:string;
userpassword:string;

constructor(username:string,useremail:string,useraddress:string,userphone:string,userpassword:string)
{
    this.username=username;
    this.useremail=useremail;
    this.useraddress=useraddress;
    this.userphone=userphone;
    this.userpassword=userpassword;
}
   
}
