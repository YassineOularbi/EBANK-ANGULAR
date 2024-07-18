import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountDto } from '../dto/account-dto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly URL = "http://localhost:8080/api/account/";

  constructor(private httpClient: HttpClient) { }

  addAccount(accountDto: AccountDto): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'add', accountDto);
  }
}
