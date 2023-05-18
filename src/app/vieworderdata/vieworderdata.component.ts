import { Component, OnInit } from '@angular/core';
import { Selectedproduct } from '../selectedproduct';
import { OrderitemService } from '../orderitem.service';
import { Orderitem } from '../orderitem';

@Component({
  selector: 'app-vieworderdata',
  templateUrl: './vieworderdata.component.html',
  styleUrls: ['./vieworderdata.component.css']
})
export class VieworderdataComponent implements OnInit {
product:Selectedproduct[];
orderitem:Orderitem[];
selectedorderitem:Orderitem[]=[];
userid:number;
totalamount:number;
date:any;
chk:boolean=false;
  constructor(private orderitemservice:OrderitemService) { }

  ngOnInit(): void {
    this.userid=parseInt(sessionStorage.getItem('userdetail'));
    this.product=JSON.parse(sessionStorage.getItem('finalselecteditem'));
 if(this.product==null)
 {
  this.chk=false;
 }
 else{
  this.chk=true;
 }
    this.date=new Date();
   this.date.setDate(this.date.getDate()+2);
    this.totalamount=parseInt(sessionStorage.getItem('totalamount'));
    
   this.orderitemservice.getallorderitems().subscribe(data=>{
    this.orderitem=data;
   for(let i of this.orderitem)
   {
    if(i.userid==this.userid)
    {
      this.selectedorderitem.push(i);
    }
   }
   });


    sessionStorage.removeItem('finalselecteditem');
    sessionStorage.removeItem('totalproducts');
  }

}
