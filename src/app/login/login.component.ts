import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthRequest } from '../auth/auth-request.interface';
import { AuthResponse } from '../auth/auth-response.interface';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    ReactiveFormsModule
  ]
})
export class LoginComponent implements OnInit{
  authForm: FormGroup;
  token!: string;

  constructor(private authService: AuthService, private fb: FormBuilder) { 
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
      if(localStorage.getItem("auth-token")){
        console.log(window.sessionStorage.getItem("auth-token"))
      }
  }

  onSubmit(): void {
    if (this.authForm.valid) {
      const authRequest: AuthRequest = this.authForm.value as AuthRequest;
      console.log('auth Data:', authRequest);
      console.log(authRequest.username)
      console.log(authRequest.password)
      this.authService.login(authRequest).subscribe(
        data => { this.token = data.accessToken;
        console.log('Login token:', this.token);
        localStorage.setItem("auth-token", this.token);
        },
        err => {
          err.error.message;
        }
      );
    }
  }

}
