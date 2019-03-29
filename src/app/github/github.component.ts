import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import {HttpClient } from "@angular/common/http";
import { SearchService } from "../git-search/search.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers:[SearchService],
  styleUrls: ['./github.component.css']

})
export class GithubComponent implements OnInit {
  user:User;
  constructor(private http:HttpClient,private searchService:SearchService) {
   }


  ngOnInit() {
    this.searchService.gitSearch()
    this.user=this.searchService.user

  }

}
