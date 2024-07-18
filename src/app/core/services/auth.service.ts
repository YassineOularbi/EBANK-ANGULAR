import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { UserDto } from '../dtos/user.dto';
import { AuthRequest } from '../interfaces/auth-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = "http://localhost:8080/api/auth/";

  constructor(private httpClient: HttpClient) { }

  login(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(this.URL + "login", authRequest);
  }

  signup(userDto: UserDto): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(this.URL + "signup", userDto)
  }
  
}
