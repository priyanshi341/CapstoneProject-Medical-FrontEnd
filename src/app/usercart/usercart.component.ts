import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { Selectedproduct } from '../selectedproduct';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {
product:Selectedproduct[];
totalamount:number=0;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.product=JSON.parse(sessionStorage.getItem('totalproducts'));
  }

  deleteitem(id:number)
  {
    this.product.splice(id,1);
    
  }

  orderaction()
  {
   if(this.product.length==0)
    {
      alert("First Select the item to order");
    }
    else{
       for(let i of this.product)
       {
       this.totalamount=this.totalamount+i.totalprice;
       }
      
       sessionStorage.setItem('totalamount',this.totalamount.toString());
       sessionStorage.setItem('finalselecteditem',JSON.stringify(this.product));
      this.router.navigate(['paynow']);
    }
  }

}
