import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from './auth-request.interface';
import { AuthResponse } from './auth-response.interface';
import { UserDto } from '../dto/user-dto.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = "http://localhost:8080/api/auth/";

  constructor(private httpClient: HttpClient) { }

  login(authRequest: AuthRequest): Observable<any> {
    return this.httpClient.post<any>(this.URL + "login", authRequest);
  }

  signup(userDto: UserDto): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(this.URL + "signup", userDto)
  }
  
}
