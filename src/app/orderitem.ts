export class Orderitem {
    id:number;
    orderid:number;
    userid:number;
    productname:string;
   productprice:number;
    productquantity:number;
    totalprice:number;
    date:Date;
    constructor( orderid:number, userid:number,  productname:string,productprice:number,
      productquantity:number,totalprice:number,date:Date)
    {
      
      this.orderid=orderid;
      this.userid=userid;
      this.productname=productname;
      this.productprice=productprice;
      this.productquantity=productquantity;
      this.totalprice=totalprice;
      this.date=date;
    }
}
