import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import {HttpClient } from "@angular/common/http";
import { SearchService } from "../git-search/search.service";
import { Observable } from "rxjs";
import { Repos } from "../repo/repos";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers:[SearchService],
  styleUrls: ['./github.component.css']

})
export class GithubComponent implements OnInit {


  userName:string="kipkemoimayor";
  repos:Repos[];
  loading:boolean =false;
  errorMessage;
  user:User[];

  constructor(private http:HttpClient,private searchService:SearchService) {
   }
   public getRepos(){

     let promise=new Promise((resolve,reject)=>{
       this.searchService.getRepos(this.userName).toPromise().then(response=>{
         this.repos=response;
         resolve()
       },
       error=>{
          this.errorMessage="An Error Occured"
         reject(error)
       })

     })

     return promise;

     //promise ends
   //   this.searchService.getRepos(this.userName).subscribe((response)=>{
   //     this.repos=response;
   //
   //   },
   //   (error)=>{
   //     this.errorMessage=error;
   //     this.loading=false;
   //
   //   },
   //   ()=>{this.loading=false}
   // )
   }
   public getUsers(event:any){
     //promise



     let promise =new Promise((resolve,reject)=>{
      this.searchService.getUsers(this.userName).toPromise().then(response=>{
        this.user=response;
         resolve()
       },
       error=>{
         this.errorMessage="An error was encountered";
         reject(error);
       }
     )
     })
     return promise;
   //   this.loading=true;
   //   this.searchService.getUsers(this.userName).subscribe((response)=>{
   //     this.user=response;
   //
   //   },
   //   (error)=>{
   //
   //
   //   },
   //   ()=>{this.loading=false}
   // )
   }


  ngOnInit() {
    // this.searchService.gitSearch()
    // this.user=this.searchService.user

  }

}
