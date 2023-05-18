import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

import { Orderitem } from '../orderitem';
import { OrderitemService } from '../orderitem.service';
import { Selectedproduct } from '../selectedproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paynow',
  templateUrl: './paynow.component.html',
  styleUrls: ['./paynow.component.css']
})
export class PaynowComponent implements OnInit {
totalamount:number=0;
product:Selectedproduct[];
orderid:any;
oredritem:Orderitem;
userid:number;
totalid:number=0;
currentdate:Date=new Date();
  constructor(private orderidservice:OrderService,private orderitemservice:OrderitemService,private router:Router) { }

  ngOnInit(): void {
    this.totalamount=parseInt(sessionStorage.getItem('totalamount'));
    this.product=JSON.parse(sessionStorage.getItem('finalselecteditem'));
   this.userid=parseInt(sessionStorage.getItem('userdetail'));
  }

  paynowbutton()
  {
   var order:Order=new Order();
     this.orderidservice.saveorderid(order).subscribe(data=>{
    this.orderid=data;
     for(let i of this.product)
    {
      this.oredritem=new Orderitem( this.orderid,this.userid,i.name,i.productprice,i.quantity,i.totalprice,this.currentdate);
      this.orderitemservice.saveorderitem(this.oredritem).subscribe(data=>{
      console.log("added product order successfully to table");
      this.router.navigate(['vieworder']);
      });
    }
    
     });
    
    
  }
}
