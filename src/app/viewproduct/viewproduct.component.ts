import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
id:number;
product:Product;
  constructor(private aroute:ActivatedRoute,private productservice:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.aroute.snapshot.params['id'];
this.productservice.getsingleproduct(this.id).subscribe(data=>{
  this.product=data;
});
  }

backaction()
{
  this.router.navigate(['viewallbyuser']);
}


}
