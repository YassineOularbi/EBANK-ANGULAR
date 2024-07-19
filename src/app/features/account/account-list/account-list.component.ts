import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Account } from '../../../core/models/account.model';
import { AccountService } from '../../../core/services/account.service';
import { RouterLink } from '@angular/router';
import { AccountDto } from '../../../core/dtos/account.dto';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountService){}

  ngOnInit(): void {
    this.getAll()
  }
    
  getAll(){
    this.accountService.getAllByUser('4').subscribe({
      next: (response: Account[]) => {
        this.accounts = response;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  deleteAccount(id: any): void {
    this.accountService.delete(id).subscribe({
      next: (response: AccountDto) => {
        console.log(response)
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }
}
