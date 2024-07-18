import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from '../dtos/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly URL = "http://localhost:8080/api/user/";

  constructor(private httpClient: HttpClient) { }

  // Get all users
  getAll(): Observable<UserDto[]> {
    return this.httpClient.get<UserDto[]>(`${this.URL}get-all`);
  }

  // Get user by ID
  getById(id: string): Observable<UserDto> {
    return this.httpClient.get<UserDto>(`${this.URL}get-by-id/${id}`);
  }

  // Add a new user
  add(userDto: UserDto): Observable<UserDto> {
    return this.httpClient.post<UserDto>(`${this.URL}add`, userDto);
  }

  // Update an existing user
  update(id: string, userDto: UserDto): Observable<UserDto> {
    return this.httpClient.put<UserDto>(`${this.URL}update/${id}`, userDto);
  }

  // Delete a user by ID
  delete(id: string): Observable<UserDto> {
    return this.httpClient.delete<UserDto>(`${this.URL}delete/${id}`);
  }
}
