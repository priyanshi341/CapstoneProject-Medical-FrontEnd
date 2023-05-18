import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { Product } from '../product';
@Component({
  selector: 'app-viewallproductforadmin',
  templateUrl: './viewallproductforadmin.component.html',
  styleUrls: ['./viewallproductforadmin.component.css']
})
export class ViewallproductforadminComponent implements OnInit {
product:Product[];
  constructor(private productservice:ProductService,private router:Router,private builder:FormBuilder) { }

  ngOnInit(): void {
   this.method();
  }
method()
{
  this.productservice.getallproducts().subscribe(data=>{
    this.product=data;
   });
}
  updatefunction(id:number)
  {
this.router.navigate(['updateproduct',id]);
  }

  deletefunction(id:number)
  {
    this.productservice.deleteproduct(id).subscribe(data=>{
this.method();
    });
  }
}
