import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { validateLocaleAndSetLanguage } from 'typescript';
import { Category } from '../category';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
selectedfile:File;
category:Category[];
selectcategory:Category;
filepath:string;
id:number;
msg:string="";
  constructor(private builder:FormBuilder,private router:Router,private service:ProductService,
    private categoryservice:CategoryService) { }

  ngOnInit(): void {
    this.categoryservice.getallcategory().subscribe(data=>{
     this.category=data;
    });
  }

  productform=this.builder.group({
    name:this.builder.control('',Validators.required),
    description:this.builder.control('',Validators.required),
    price:this.builder.control('',Validators.required),
    quantity:this.builder.control('',Validators.required),
    
    selectid:this.builder.control('',Validators.required)
  });

  fileaction(event:any)
  {
   this.selectedfile=event.target.files[0];
   this.filepath="/assets/Image/"+this.selectedfile.name.toString();
  }

  buttonaction()
  {
    this.id=this.productform.controls.selectid.value;

    this.categoryservice.getcategorybyid(this.id).subscribe(data=>{
   this.selectcategory=data;
    });

   var product:Product=new Product(this.productform.controls.name.value,this.productform.controls.description.value,
      this.productform.controls.price.value,this.productform.controls.quantity.value, this.filepath, 
      this.selectcategory);

      this.service.saveproduct(product).subscribe(data=>{
      this.msg="Product added successfully";
      });
  }

  viewallproduct(){
    this.router.navigate(['viewallbyadmin']);
  }
}
