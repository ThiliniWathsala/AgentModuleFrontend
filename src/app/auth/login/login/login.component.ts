import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
    
  })
  export class LoginComponent {
    isLoading = false;

    constructor(private authService:AuthService) {}

    onLogin(form: NgForm) {

        console.log(form.value);
        if (form.invalid) {
          return;
        }
        this.isLoading = true;
        this.authService.login(form.value.email, form.value.password);
      }

  }