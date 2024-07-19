import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Beneficiary } from '../../../core/models/beneficiary.model';
import { BeneficiaryService } from '../../../core/services/beneficiary.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BeneficiaryDto } from '../../../core/dtos/beneficiary.dto';

@Component({
  selector: 'app-beneficiary-add',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './beneficiary-add-edit.component.html',
  styleUrl: './beneficiary-add-edit.component.css'
})
export class BeneficiaryAddEditComponent implements OnInit {

  isEditMode: boolean = false;
  BeneficiaryForm: FormGroup;
  beneficiary: Beneficiary | undefined;
  id: string | any = null;

  constructor(
    private beneficiaryService: BeneficiaryService, 
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.BeneficiaryForm = this.fb.group({
      name: ['', Validators.required],
      iban: ['', Validators.required],
      bank: ['', Validators.required],
      account_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    if (this.id) {
      this.isEditMode = true;
      this.getById();
    }
  }

  getById() {
    this.beneficiaryService.getById(this.id).subscribe({
      next: (response: Beneficiary) => {
        console.log(response)
        this.beneficiary = response;
        this.BeneficiaryForm.patchValue({
          name: response.name,
          iban: response.iban,
          bank: response.bank,
        });
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  onSubmit(): void {
    if (this.BeneficiaryForm.valid) {
      let beneficiary: BeneficiaryDto = this.BeneficiaryForm.value as BeneficiaryDto;
      if (this.isEditMode && this.id) {
        this.beneficiaryService.update(this.id, beneficiary).subscribe({
          next: (response: BeneficiaryDto) => {
            console.log('Account updated:', response);
            this.router.navigate(['/beneficiaries']);
          },
          error: (err) => {
            console.error('Update error:', err);
          }
        });
      } else {
        this.beneficiaryService.save(beneficiary).subscribe({
          next: (response: BeneficiaryDto) => {
            console.log('Account added:', response);
            this.router.navigate(['/beneficiaries']);
          },
          error: (err) => {
            console.error('Add error:', err);
          }
        });
      }
    }
  }
}
