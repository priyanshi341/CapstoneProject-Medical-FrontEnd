import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewallproductsforuserComponent } from './viewallproductsforuser/viewallproductsforuser.component';
import { UsercartComponent } from './usercart/usercart.component';
import { PaynowComponent } from './paynow/paynow.component';
import { VieworderdataComponent } from './vieworderdata/vieworderdata.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewallproductforadminComponent } from './viewallproductforadmin/viewallproductforadmin.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import{NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import{Ng2OrderModule} from 'ng2-order-pipe';
import { OrderdetilsforadminComponent } from './orderdetilsforadmin/orderdetilsforadmin.component';
import { UserdetailsforadminComponent } from './userdetailsforadmin/userdetailsforadmin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcategoryComponent,
    AddproductComponent,
    ViewallproductsforuserComponent,
    UsercartComponent,
    PaynowComponent,
    VieworderdataComponent,
    AdduserComponent,
    LoginpageComponent,
    UserhomepageComponent,
    AdminhomepageComponent,
    ViewproductComponent,
    ViewallproductforadminComponent,
    UpdateproductComponent,
    OrderdetilsforadminComponent,
    UserdetailsforadminComponent,
    ForgotpasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgbModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
