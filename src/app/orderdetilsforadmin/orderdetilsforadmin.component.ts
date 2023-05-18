import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { OrderitemService } from '../orderitem.service';
import { Orderitem } from '../orderitem';

@Component({
  selector: 'app-orderdetilsforadmin',
  templateUrl: './orderdetilsforadmin.component.html',
  styleUrls: ['./orderdetilsforadmin.component.css']
})
export class OrderdetilsforadminComponent implements OnInit {
order:Orderitem[];
  constructor(private orderservice:OrderitemService) { }

  ngOnInit(): void {
    this.orderservice.getallorderitems().subscribe(data=>{
  this.order=data;
    });
  }

}
