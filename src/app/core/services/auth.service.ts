import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { UserDto } from '../dtos/user.dto';
import { AuthRequest } from '../interfaces/auth-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = "http://localhost:8080/api/auth/";

  constructor(private httpClient: HttpClient) { }

  login(authRequest: AuthRequest): void {
    this.httpClient.post<AuthResponse>(this.URL + "login", authRequest).subscribe({
      next: (response: AuthResponse) => {
        const authResponse: AuthResponse = response;
        if(authResponse.accessToken != null){
          localStorage.setItem('auth-token', authResponse.accessToken);
        }
      },
      error: (err) => {
        console.error('Error creating account:', err);
      }
      
    });
  }

  signup(userDto: UserDto): void {
    this.httpClient.post<AuthResponse>(this.URL + "signup", userDto).subscribe({
      next: (response: AuthResponse) => {
        const authResponse: AuthResponse = response;
        if(authResponse.accessToken != null){
          localStorage.setItem('auth-token', authResponse.accessToken);
        }
      },
      error: (err) => {
        console.error('Error creating account:', err);
      }
      
    });
  }

  logout(){
    localStorage.removeItem("auth-token")
  }

  isTokenExpired(token: string): boolean {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return expiry * 1000 > Date.now();
  }
  
   getAuthStatus(): boolean{
    let token: any = localStorage.getItem("auth-token")
    if(token != null && this.isTokenExpired(token)){
      return true;
    }
     return false;
   }
}
