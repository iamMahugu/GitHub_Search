import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressHttpModule } from "@ngx-progressbar/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { SearchService } from "./git-search/search.service";
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';
import { BgColorDirective } from './bg-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    UserWelcomeComponent,
    BgColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule,
    NgProgressHttpModule

  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
