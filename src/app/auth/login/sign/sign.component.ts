import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NgForm } from '@angular/forms';

@Component({
    selector:"./app-login",
    templateUrl: "./sign.component.html",
    styleUrls: ["./sign.component.css"]
  })
  export class SignupComponent {
    isLoading = false;

    constructor(public authService: AuthService) {}
  
    onSignup(form: NgForm) {
      if (form.invalid) {
        return;
      }
      this.isLoading = true;
      this.authService.createUser(form.value.email, form.value.password);
    }
  }
  