import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ErrorComponent } from './error/error.component';
import { NullComponent } from './null/null.component';
import { GetPostComponent } from './get-post/get-post.component';
import { LoginComponent } from './login/login.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ProtectGuard } from './protect.guard';
import { ToysComponent } from './toys/toys.component';
import { ChildrenComponent } from './children/children.component';
import { LogoutComponent } from './logout/logout.component';
import { DetailsComponent } from './details/details.component';
import { MobileComponent } from './mobile/mobile.component';


const mylink:Routes=[
{
  path:'home',
  component : HomeComponent
},
{
  path:'user',
  component : UserComponent,
  // canActivate: [ProtectGuard]
},
{
  path:'children',
  component : ChildrenComponent,
  children:[
    {
      path:'toys',
      component : ToysComponent
    },
  
  ]
},
{
  path:'mobile',
  component : MobileComponent
},
{
  path:'details/:id/:name/:cost/:pic',
  component : DetailsComponent
},
{
  path:'',
  component : NullComponent
},
{
  path:'**',
  component : ErrorComponent
},


];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ErrorComponent,
    NullComponent,
    GetPostComponent,
    LoginComponent,
    ToysComponent,
    ChildrenComponent,
    LogoutComponent,
    DetailsComponent,
    MobileComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(mylink),
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
