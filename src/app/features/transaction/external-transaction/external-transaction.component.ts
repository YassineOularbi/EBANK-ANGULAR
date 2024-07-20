import { Component } from '@angular/core';
import { TransactionDto } from '../../../core/dtos/transaction.dto';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransactionService } from '../../../core/services/transaction.service';
import { TransactionMethod } from '../../../core/enums/transaction-method.enum';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-external-transaction',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './external-transaction.component.html',
  styleUrl: './external-transaction.component.css'
})
export class ExternalTransactionComponent {
  transactionForm: FormGroup;
  accountId: string | any;
  beneficiaryId: string | any;
  transactionMethods = TransactionMethod;

  constructor(private fb: FormBuilder, private transactionService: TransactionService, private route: ActivatedRoute) {
    this.transactionForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      method: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.accountId = this.route.snapshot.paramMap.get('accountId')
    this.beneficiaryId = this.route.snapshot.paramMap.get('beneficiaryId')
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const transactionDto: TransactionDto = this.transactionForm.value as TransactionDto;
      this.transactionService.externalTransaction(transactionDto, this.accountId, this.beneficiaryId).subscribe({
        next: (response: TransactionDto) => {
          console.log('Transaction successful:', response);
          this.transactionForm.reset();
        },
        error: (err: any) => {
          console.error('Transaction error:', err);
        }
      });
    }
  }
}
