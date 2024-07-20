import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransactionService } from '../../../core/services/transaction.service';
import { TransactionDto } from '../../../core/dtos/transaction.dto';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransactionMethod } from '../../../core/enums/transaction-method.enum';

@Component({
  selector: 'app-internal-transaction',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './internal-transaction.component.html',
  styleUrl: './internal-transaction.component.css'
})
export class InternalTransactionComponent implements OnInit {
  transactionForm: FormGroup;
  creditId: string | any;
  debitId: string | any;

  constructor(private fb: FormBuilder, private transactionService: TransactionService, private route: ActivatedRoute) {
    this.transactionForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      method: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.creditId = this.route.snapshot.paramMap.get('creditId')
    this.debitId = this.route.snapshot.paramMap.get('debitId')
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const transactionDto: TransactionDto = this.transactionForm.value as TransactionDto;
      this.transactionService.internalTransaction(transactionDto, this.creditId, this.debitId).subscribe({
        next: (response: TransactionDto[]) => {
          console.log('Transaction successful:', response);
          this.transactionForm.reset();
        },
        error: (err) => {
          console.error('Transaction error:', err);
        }
      });
    }
  }
}
