import { Component, OnInit } from '@angular/core';
import { UserDto } from '../../../core/dtos/user.dto';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthResponse } from '../../../core/interfaces/auth-response.interface';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  signupForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      mail: ['', Validators.required, Validators.email],
      username: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required]
    })
   }

   ngOnInit(): void {
    if(localStorage.getItem("auth-token")){
      console.log(window.sessionStorage.getItem("auth-token"))
    }
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const userDto: UserDto = this.signupForm.value as UserDto;
      this.authService.signup(userDto).subscribe({
        next: (response: AuthResponse) => {
          const authResponse: AuthResponse = response;

          localStorage.setItem('auth-token', authResponse.accessToken);

        },
        error: (err) => {
          console.error('Error creating account:', err);
        }
        
      })
    }
  }

}