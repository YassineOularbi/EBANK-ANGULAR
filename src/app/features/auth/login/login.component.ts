import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthResponse } from '../../../core/interfaces/auth-response.interface';
import { AuthService } from '../../../core/services/auth.service';
import { AuthRequest } from '../../../core/interfaces/auth-request.interface';


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
  loginForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
      if(localStorage.getItem("auth-token")){
        console.log(localStorage.getItem("auth-token"))
      }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const authRequest: AuthRequest = this.loginForm.value as AuthRequest;
      this.authService.login(authRequest)
    }
  }

}
