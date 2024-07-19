import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Beneficiary } from '../../../core/models/beneficiary.model';
import { ActivatedRoute } from '@angular/router';
import { BeneficiaryService } from '../../../core/services/beneficiary.service';

@Component({
  selector: 'app-beneficiary-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './beneficiary-detail.component.html',
  styleUrl: './beneficiary-detail.component.css'
})
export class BeneficiaryDetailComponent {

  beneficiary: Beneficiary | undefined;
  id: string | any;

  constructor(
    private route: ActivatedRoute,
    private beneficiaryService: BeneficiaryService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getBeneficiaryDetails();
  }

  getBeneficiaryDetails(): void {
    if (this.id) {
      this.beneficiaryService.getById(this.id).subscribe({
        next: (beneficiary: Beneficiary) => {
          this.beneficiary = beneficiary;
        },
        error: (err) => {
          console.error('Error fetching beneficiary details', err);
        }
      });
    }
  }

}
