import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Beneficiary } from '../../../core/models/beneficiary.model';
import { BeneficiaryService } from '../../../core/services/beneficiary.service';
import { BeneficiaryDto } from '../../../core/dtos/beneficiary.dto';

@Component({
  selector: 'app-beneficiary-list',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './beneficiary-list.component.html',
  styleUrl: './beneficiary-list.component.css'
})
export class BeneficiaryListComponent implements OnInit {

  beneficiaries: Beneficiary[] = [];

  constructor(private beneficiaryService: BeneficiaryService){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this.beneficiaryService.getAllByAccount('9').subscribe({
      next: (response: Beneficiary[]) => {
        this.beneficiaries = response;
        console.log(this.beneficiaries)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  deleteBeneficiary(id: any): void{
    this.beneficiaryService.delete(id).subscribe({
      next: (response: BeneficiaryDto) => {
        console.log(response);
        
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }
}
