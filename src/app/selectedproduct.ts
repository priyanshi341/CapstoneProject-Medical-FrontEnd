import { Category } from "./category";

export class Selectedproduct {
    id:number;
    name:string;
    description:string;
    productprice:number;
    quantity:number;
    totalprice:number;
    image:string;
    category:Category;
    constructor( id1:number, name1:string,  description1:string,  productprice:number, quantity1:number,  totalprice:number,
        image1:string, category1:Category)
    {
   this.id=id1;
      this.name=name1;
      this.description=description1;
      this.productprice=productprice;
      this.quantity=quantity1;
      this.image=image1;
      this.totalprice=totalprice;
      this.category=category1;
    }
}
