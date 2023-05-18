import { Category } from "./category";

export class Product {
  
    id:number;
    name:string;
    description:string;
    price:number;
    quantity:number;
    image:string;
    category:Category;
    constructor(  name1:string,  description1:string,  price1:number, quantity1:number, 
        image1:string, category1:Category)
    {
   
      this.name=name1;
      this.description=description1;
      this.price=price1;
      this.quantity=quantity1;
      this.image=image1;
      this.category=category1;
    }
   
}
