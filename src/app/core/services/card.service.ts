import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardDto } from '../dtos/card.dto';
import { CardBlockingDto } from '../dtos/card-blocking.dto';
import { CardStatusDto } from '../dtos/card-status.dto';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private readonly URL = 'http://localhost:8080/api/card/';

  constructor(private httpClient: HttpClient) {}

  // Get all cards by account ID
  getAllByAccount(id: string): Observable<CardDto[]> {
    return this.httpClient.get<CardDto[]>(`${this.URL}get-cards-by-account/${id}`);
  }

  // Get card by ID
  getById(id: string): Observable<CardDto> {
    return this.httpClient.get<CardDto>(`${this.URL}get-by-id/${id}`);
  }

  // Add a new card
  save(cardDto: CardDto): Observable<CardDto> {
    return this.httpClient.post<CardDto>(`${this.URL}add`, cardDto);
  }

  // Delete a card by ID
  delete(id: string): Observable<CardDto> {
    return this.httpClient.delete<CardDto>(`${this.URL}delete/${id}`);
  }

  // Change card status (activate/deactivate)
  changeCardStatus(id: string, cardStatusDto: CardStatusDto): Observable<CardDto> {
    return this.httpClient.put<CardDto>(`${this.URL}activate-deactivate/${id}`, cardStatusDto);
  }

  // Block a card
  blockCard(id: string, cardBlockingDto: CardBlockingDto): Observable<CardDto> {
    return this.httpClient.put<CardDto>(`${this.URL}block/${id}`, cardBlockingDto);
  }
}
