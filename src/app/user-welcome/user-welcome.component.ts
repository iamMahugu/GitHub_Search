import { Component, OnInit } from '@angular/core';
import { BgColorDirective } from "../bg-color.directive";
import { RoutingModule } from "../routing/routing.module";
import {Router } from "@angular/router";
@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.css']
})
export class UserWelcomeComponent implements OnInit {

  constructor(private router:Router) { }
  goToSearch(){
    this.router.navigate(["/github"])
  }

  ngOnInit() {
  }

}
