import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransactionMethod } from '../../../core/enums/transaction-method.enum';
import { TransactionService } from '../../../core/services/transaction.service';
import { ActivatedRoute } from '@angular/router';
import { TransactionDto } from '../../../core/dtos/transaction.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-transaction',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './card-transaction.component.html',
  styleUrl: './card-transaction.component.css'
})
export class CardTransactionComponent {
  transactionForm: FormGroup;
  cardId: string | any;
  beneficiaryId: string | any;

  constructor(private fb: FormBuilder, private transactionService: TransactionService, private route: ActivatedRoute) {
    this.transactionForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.cardId = this.route.snapshot.paramMap.get('cardId')
    this.beneficiaryId = this.route.snapshot.paramMap.get('beneficiaryId')
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const transactionDto: TransactionDto = this.transactionForm.value as TransactionDto;
      this.transactionService.cardTransaction(transactionDto, this.cardId, this.beneficiaryId).subscribe({
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
