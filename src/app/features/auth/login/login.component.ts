import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthResponse } from '../../../core/interfaces/auth-response.interface';
import { AuthService } from '../../../core/services/auth.service';
import { AuthRequest } from '../../../core/interfaces/auth-request.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/ngrx/app.state';
import { setUser } from '../../../core/ngrx/user/user.actions';
import { ErrorDialogComponent } from '../../../shared/error-dialog/error-dialog.component';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService, 
    private fb: FormBuilder, 
    private route: Router, 
    private dialog: MatDialog, 
    private store: Store<AppState>
  ) { 
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem("auth-token")) {
      console.log(localStorage.getItem("auth-token"));
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const authRequest: AuthRequest = this.loginForm.value as AuthRequest;
      this.authService.login(authRequest).subscribe({
        next: (response: AuthResponse) => {
          const authResponse: AuthResponse = response;
          if (authResponse.accessToken != null) {
            localStorage.setItem('auth-token', authResponse.accessToken);
            let userSt: User = authResponse.user;
            console.log(userSt);
            this.store.dispatch(setUser({ user: userSt }));
            console.log(authResponse.user);
            this.route.navigateByUrl("/dashboard");
          }
        },
        error: (err) => {
          console.error('Error logging in:', err);
          this.dialog.open(ErrorDialogComponent, {
            data: {
              message: 'Failed to login. Please check your credentials and try again.'
            }
          });
        }
      });
    }
  }
}
