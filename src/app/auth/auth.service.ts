import { Injectable } from '@angular/core';
import { AuthData } from './login/auth-data.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
    constructor(private http: HttpClient, private router: Router) {}
    private isAuthenticated = false;
    private token: string;
    private tokenTimer: any;
    private authStatusListener = new Subject<boolean>();
    public isauth=false;


    
  
    isAuth(){
     return this.isAuthenticated;
    }
    
    getAuthStatusListener() {
      return this.authStatusListener.asObservable();
    }

    createUser(email: string, password: string) {
        const authData: AuthData = { email: email, password: password };
        this.http
          .post("http://localhost:3000/api/user/signup", authData)
          .subscribe(response => {
            console.log(response);
          });
      }


      login(email: string, password: string) {
        const authData: AuthData = { email: email, password: password };
        this.http.post<{ token: string; expiresIn: number }>(
            "http://localhost:3000/api/user/login",
            authData
          ).subscribe(response => {
            const token = response.token;
            this.token = token;
            this.isAuthenticated=true;
            console.log(token);
       
            this.router.navigate(["client"]);
         
          })
         
      }

      logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        //this.clearAuthData();
        this.router.navigate(["login"]);
      }
    
    
}