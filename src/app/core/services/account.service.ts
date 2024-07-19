import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDto } from '../dtos/account.dto';
import { AccountClosingDto } from '../dtos/account-closing.dto';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly URL = "http://localhost:8080/api/account/";

  constructor(private httpClient: HttpClient) { }

  // Get account by ID
  getById(id: string): Observable<Account> {
    return this.httpClient.get<Account>(`${this.URL}get-by-id/${id}`);
  }

  // Get all accounts by user ID
  getAllByUser(userId: string): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.URL}get-all-by-user/${userId}`);
  }

  // Add a new account
  add(accountDto: AccountDto): Observable<AccountDto> {
    return this.httpClient.post<AccountDto>(`${this.URL}add`, accountDto);
  }

  // Update an existing account
  update(id: string, accountDto: AccountDto): Observable<AccountDto> {
    return this.httpClient.put<AccountDto>(`${this.URL}update/${id}`, accountDto);
  }

  // Delete an account by ID
  delete(id: string): Observable<AccountDto> {
    return this.httpClient.delete<AccountDto>(`${this.URL}delete/${id}`);
  }

  // Close an account by ID
  close(id: string, accountClosingDto: AccountClosingDto): Observable<AccountDto> {
    return this.httpClient.put<AccountDto>(`${this.URL}close-account/${id}`, accountClosingDto);
  }
}
