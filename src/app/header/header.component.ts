import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from "rxjs";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
  })

  export class HeaderComponent{
    constructor(private authService: AuthService) {}
    userIsAuthenticated = false;
    private authListenerSubs: Subscription;
   
    checkAuth;

    ngOnInit() {
     this.userIsAuthenticated=this.authService.isauth;
     this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    }


    onLogout() {
      this.authService.logout();
    }
  }