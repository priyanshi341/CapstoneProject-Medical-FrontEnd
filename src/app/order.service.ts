import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  private uriapi='http://localhost:8080/orderid';

  saveorderid(order:Order):Observable<object>
  {
    return this.http.post(`${this.uriapi}`,order);
  }

  getsingleorderid(id:number):Observable<Order>
  {
    return this.http.get<Order>(`${this.uriapi}/${id}`);
  }

  getallorderid():Observable<Order[]>
  {
    return this.http.get<Order[]>(`${this.uriapi}`);
  }
}
