import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormBuilder ,Validators} from '@angular/forms';
import { Product } from '../product';
import { Selectedproduct } from '../selectedproduct';

@Component({
  selector: 'app-viewallproductsforuser',
  templateUrl: './viewallproductsforuser.component.html',
  styleUrls: ['./viewallproductsforuser.component.css']
})
export class ViewallproductsforuserComponent implements OnInit {
product:Product[];
totalquant:number;
quant:number;
selectproduct:Product;
totalselectedproduct:Selectedproduct[]=[];
p:number=1;
ename:string="";
key:string='name';
  reverse:boolean=false;
  constructor(private productservice:ProductService,private router:Router,private builder:FormBuilder) { 
   
  }

  ngOnInit(): void {
    this.method();
    if(sessionStorage.getItem('totalproducts')!=null)
    {
      this.totalselectedproduct=JSON.parse( sessionStorage.getItem('totalproducts'));
    }
   
  }

  method()
  {
    this.productservice.getallproducts().subscribe(data=>{
      this.product=data;
      });
  }
  selectproductform=this.builder.group({
    quanty:this.builder.control('',Validators.required)
  });

  selectbutton(id:number)
  {
    this.productservice.getsingleproduct(id).subscribe(data=>{
      this.selectproduct=data;
      this.quant=this.selectproductform.controls.quanty.value;
    
       if(this.quant==null)
       {
         alert("Please type the quantity you want");
       }
      else if(this.quant > this.selectproduct.quantity)
       {
         alert("you can't select more than "+this.selectproduct.quantity);
       }
       else{
       
        this.totalselectedproduct.push(new Selectedproduct(this.selectproduct.id,this.selectproduct.name,this.selectproduct.description,
         this.selectproduct.price, this.quant,this.selectproduct.price* this.quant,this.selectproduct.image,this.selectproduct.category));
         alert("Your Item Has Been Successfully Added to cart");
         sessionStorage.setItem('totalproducts',JSON.stringify(this.totalselectedproduct));
       }
    });
    
  
  }
viewbuttonaction(id:number){
  this.router.navigate(['viewproduct',id]);
}
 

  search()
  {
    if(this.ename=="")
    {
       this.method();
    }
    else{
      this.product=this.product.filter(res=>{
   return res.name.toLocaleLowerCase().match(this.ename);
      });
    }
  }

  
  sort(key:string)
  {
    this.key=key;
     this.reverse=!this.reverse;
  }
}
