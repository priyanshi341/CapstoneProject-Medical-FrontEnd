import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Admin } from './admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  private uriapi='http://localhost:8080/admin';

  getadminbyid(id:number):Observable<Admin>
  {
     return this.http.get<Admin>(`${this.uriapi}/${id}`);
  }
  checkadmin():boolean
  {
    return sessionStorage.getItem('admindetail')!=null;
  }
  updateadmin(id:number,admin:Admin):Observable<object>
  {
    return this.http.put(`${this.uriapi}/${id}`,admin);
  }
}
