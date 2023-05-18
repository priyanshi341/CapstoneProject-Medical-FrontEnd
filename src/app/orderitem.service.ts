import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orderitem } from './orderitem';
@Injectable({
  providedIn: 'root'
})
export class OrderitemService {

  constructor(private http:HttpClient) { }

  private uriapi='http://localhost:8080/orderitems';
  
  saveorderitem(orderitem:Orderitem):Observable<object>
  {
    return this.http.post(`${this.uriapi}`,orderitem);
  }

  getorderitem(id:number):Observable<Orderitem>
  {
    return this.http.get<Orderitem>(`${this.uriapi}/${id}`);
  }

  getallorderitems():Observable<Orderitem[]>
  {
    return this.http.get<Orderitem[]>(`${this.uriapi}`);
  }

}
