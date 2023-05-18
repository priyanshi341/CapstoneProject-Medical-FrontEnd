import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { Category } from '../category';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
selectcategory:Category;
msg:string="";
  constructor(private builder:FormBuilder,private service:CategoryService,private router:Router) { }

  ngOnInit(): void {
  }

  categoryform=this.builder.group({
    name:this.builder.control('',Validators.required),
    description:this.builder.control('',Validators.required)
  });

  buttonaction()
  {
    this.service.savecategory(this.categoryform.value).subscribe(data=>{
    this.msg="category added successfully";
    });
  }
  

}
