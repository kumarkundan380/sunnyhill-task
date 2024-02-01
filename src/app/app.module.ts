import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { TestComponent } from './test/test.component';
import { ProductAddComponent } from './modals/product-add/product-add.component';
import { ProductEditComponent } from './modals/product-edit/product-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProductAddComponent,
    ProductEditComponent,
    LoginComponent,
    HomepageComponent,
    LayoutComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
