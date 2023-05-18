import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewallproductsforuserComponent } from './viewallproductsforuser/viewallproductsforuser.component';
import { UsercartComponent } from './usercart/usercart.component';
import { PaynowComponent } from './paynow/paynow.component';
import { VieworderdataComponent } from './vieworderdata/vieworderdata.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AdminGuard } from './admin.guard';
import { UserGuard } from './user.guard';
import { ViewallproductforadminComponent } from './viewallproductforadmin/viewallproductforadmin.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { OrderdetilsforadminComponent } from './orderdetilsforadmin/orderdetilsforadmin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  {path:"addcategory",component:AddcategoryComponent,canActivate:[AdminGuard]},
  {path:"addproduct",component:AddproductComponent,canActivate:[AdminGuard]},
  {path:"viewallbyuser",component:ViewallproductsforuserComponent,canActivate:[UserGuard]},
  {path:"usercart",component:UsercartComponent,canActivate:[UserGuard]},
  {path:"paynow",component:PaynowComponent,canActivate:[UserGuard]},
  {path:"vieworder",component:VieworderdataComponent,canActivate:[UserGuard]},
  {path:"adduser",component:AdduserComponent},
  {path:"login",component:LoginpageComponent},
  {path:"userhomepage",component:UserhomepageComponent,canActivate:[UserGuard]},
  {path:"adminhomepage",component:AdminhomepageComponent,canActivate:[AdminGuard]},
  {path:"viewproduct/:id",component:ViewproductComponent},
  {path:"viewallbyadmin",component:ViewallproductforadminComponent,canActivate:[AdminGuard]},
  {path:"updateproduct/:id",component:UpdateproductComponent},
  {path:"ordersdisplay",component:OrderdetilsforadminComponent,canActivate:[AdminGuard]},
  {path:"forgotpassword",component:ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
