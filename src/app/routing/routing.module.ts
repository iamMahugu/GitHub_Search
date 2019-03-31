import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes } from "@angular/router";

import { GithubComponent } from "../github/github.component";
import { UserWelcomeComponent } from "../user-welcome/user-welcome.component";

const routes:Routes=[
  {path:"github",component:GithubComponent},
  {path:"home",component:UserWelcomeComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
