import { CommonModule, Time } from '@angular/common';
import { Component } from '@angular/core';
import { Transaction } from '../../../core/models/transaction.model';
import { TransactionService } from '../../../core/services/transaction.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getAllByAccount('9').subscribe({
      next: (transactions: Transaction[]) => {
        this.transactions = transactions;
      },
      error: (err) => {
        console.error('Error fetching transactions', err);
      }
    });
  }

}
