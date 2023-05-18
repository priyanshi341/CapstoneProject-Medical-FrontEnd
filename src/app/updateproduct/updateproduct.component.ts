import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { FormBuilder ,Validators} from '@angular/forms';
import { CategoryService } from '../category.service';
import { Category } from '../category';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
product:Product;
id:number;
category:Category[];
file:File;
type:string;
createproduct:Product;
createcategory:Category;
fetchid:number;
path:string="";
  constructor(private aroute:ActivatedRoute,private router:Router, private categoryservice:CategoryService,private productservice:ProductService,private builder:FormBuilder) { }

  ngOnInit(): void {
this.id=this.aroute.snapshot.params['id'];
this.productservice.getsingleproduct(this.id).subscribe(data=>{
  this.product=data;
  this.path=this.product.image;
});
this.categoryservice.getallcategory().subscribe(data=>{
 this.category=data;
});

  }


  updateproductform=this.builder.group({
    updatename:this.builder.control('',Validators.required),
    description:this.builder.control('',Validators.required),
    price:this.builder.control('',Validators.required),
    quantity:this.builder.control('',Validators.required),
    
    selectid:this.builder.control('',Validators.required)
  });


  fileaction(event)
  {
    this.file=event.target.files[0];
    this.type="/assets/Image/"+this.file.name.toString();
    this.path=this.type;
  }


updateaction()
{
this.fetchid=this.updateproductform.controls.selectid.value;
if(this.fetchid>=1)
{
  this.categoryservice.getcategorybyid(this.fetchid).subscribe(data=>{
    this.createcategory=data;
  
  
  this.createproduct=new Product(this.updateproductform.controls.updatename.value,
    this.updateproductform.controls.description.value,this.updateproductform.controls.price.value,this.updateproductform.controls.quantity.value,
    this.path,this.createcategory);
   console.log(this.createproduct);
  
    this.productservice.updateproduct(this.createproduct,this.id).subscribe(data=>{
    this.router.navigate(['viewallbyadmin']);
    });
  });
}
else{
  this.createproduct=new Product(this.updateproductform.controls.updatename.value,
    this.updateproductform.controls.description.value,this.updateproductform.controls.price.value,this.updateproductform.controls.quantity.value,
    this.path,this.product.category);
   console.log(this.createproduct);
  
    this.productservice.updateproduct(this.createproduct,this.id).subscribe(data=>{
    this.router.navigate(['viewallbyadmin']);
    });
}


}
}
