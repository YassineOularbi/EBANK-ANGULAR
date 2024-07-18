import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionDto } from '../dtos/transaction.dto';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private readonly URL = 'http://localhost:8080/api/transaction/';

  constructor(private httpClient: HttpClient) {}

  // Internal transaction between two accounts
  internalTransaction(transactionDto: TransactionDto, creditId: string, debitId: string): Observable<TransactionDto[]> {
    return this.httpClient.post<TransactionDto[]>(`${this.URL}internal-transaction/${creditId}&${debitId}`, transactionDto);
  }

  // External transaction from an account to a beneficiary
  externalTransaction(transactionDto: TransactionDto, accountId: string, beneficiaryId: string): Observable<TransactionDto> {
    return this.httpClient.post<TransactionDto>(`${this.URL}external-transaction/${accountId}&${beneficiaryId}`, transactionDto);
  }

  // Card transaction to a beneficiary
  cardTransaction(transactionDto: TransactionDto, cardId: string, beneficiaryId: string): Observable<TransactionDto> {
    return this.httpClient.post<TransactionDto>(`${this.URL}card-transaction/${cardId}&${beneficiaryId}`, transactionDto);
  }

  // Get all transactions by account ID
  getAllByAccount(id: string): Observable<TransactionDto[]> {
    return this.httpClient.get<TransactionDto[]>(`${this.URL}get-transactions-by-account/${id}`);
  }

  // Get transaction by ID
  getById(id: string): Observable<TransactionDto> {
    return this.httpClient.get<TransactionDto>(`${this.URL}get-by-id/${id}`);
  }
}
