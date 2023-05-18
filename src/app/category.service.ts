import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  private uriapi='http://localhost:8080/category';

  savecategory( category:Category):Observable<object>
  {
   return this.http.post(`${this.uriapi}`,category);
  }

  getallcategory():Observable<Category[]>
  {
    return this.http.get<Category[]>(`${this.uriapi}`);
  }

  getcategorybyid(id:number):Observable<Category>
  {
    return this.http.get<Category>(`${this.uriapi}/${id}`);
  }

  updatecategory(category:Category,id:number):Observable<object>
  {
    return this.http.put(`${this.uriapi}/${id}`,category);
  }
  deletecategory(id:number):Observable<object>
  {
    return this.http.delete(`${this.uriapi}/${id}`);
  }
}
