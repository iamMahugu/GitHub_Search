import { Injectable } from '@angular/core';
import { User } from "../user";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class SearchService {
  user:User;
  constructor(private http:HttpClient) {
  this.user=new User("","");

 }
  gitSearch(){
  interface ApiResponse{
    avatar_url:string;
    login:string
        }
        let promise=new Promise((resolve,reject)=>{
          this.http.get<ApiResponse>("https://api.github.com/users").toPromise().then(response=>{
            this.user.avatar_url=response[0].avatar_url
            this.user.login=response[0].login
            // console.log(response[10])
            resolve()
          },
        error=>{
          this.user.login="an error occured try again"
        })
        })
        return promise

}

}
