import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BeneficiaryDto } from '../dtos/beneficiary.dto';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {
  private readonly URL = 'http://localhost:8080/api/beneficiary/';

  constructor(private httpClient: HttpClient) {}

  // Get all beneficiaries by account ID
  getAllByAccount(id: string): Observable<BeneficiaryDto[]> {
    return this.httpClient.get<BeneficiaryDto[]>(`${this.URL}get-all-beneficiary-by-account/${id}`);
  }

  // Get beneficiary by ID
  getById(id: string): Observable<BeneficiaryDto> {
    return this.httpClient.get<BeneficiaryDto>(`${this.URL}get-by-id/${id}`);
  }

  // Add a new beneficiary
  save(beneficiaryDto: BeneficiaryDto): Observable<BeneficiaryDto> {
    return this.httpClient.post<BeneficiaryDto>(`${this.URL}add`, beneficiaryDto);
  }

  // Update a beneficiary by ID
  update(id: string, beneficiaryDto: BeneficiaryDto): Observable<BeneficiaryDto> {
    return this.httpClient.put<BeneficiaryDto>(`${this.URL}update/${id}`, beneficiaryDto);
  }

  // Delete a beneficiary by ID
  delete(id: string): Observable<BeneficiaryDto> {
    return this.httpClient.delete<BeneficiaryDto>(`${this.URL}delete/${id}`);
  }
}
