import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
private uriapi='http://localhost:8080/user';

saveuser(user:User):Observable<object>
{
  return this.http.post(`${this.uriapi}`,user);
}
getuserbyid(id:number):Observable<User>
{
  return this.http.get<User>(`${this.uriapi}/${id}`);
}

getallusers():Observable<User[]>
{
  return this.http.get<User[]>(`${this.uriapi}`);
}

updateuser(id:number,user:User):Observable<object>{
  return this.http.put(`${this.uriapi}/${id}`,user);
}

checkuser():boolean
{
  return sessionStorage.getItem('userdetail')!=null;
}
}
