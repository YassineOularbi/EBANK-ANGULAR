import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Account } from '../../../core/models/account.model';
import { AccountService } from '../../../core/services/account.service';
import { RouterLink } from '@angular/router';
import { AccountDto } from '../../../core/dtos/account.dto';
import { User } from '../../../core/models/user.model';
import { Observable, pipe } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/ngrx/app.state';
import { selectUser } from '../../../core/ngrx/user/user.selectors';

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
  user$: Observable<User | null>;
  accounts: Account[] = [];

  constructor(private accountService: AccountService, private store: Store<AppState>){
    this.user$ = this.store.select((pipe(selectUser)));
    console.log(this.store.select(selectUser))
    console.log(this.user$);
    
  }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      console.log('User from store:', user);
    });
  }

  getAll(userId: any): void {
    console.log(userId)
    this.accountService.getAllByUser(userId).subscribe({
      next: (response: Account[]) => {
        this.accounts = response;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteAccount(id: any): void {
    this.accountService.delete(id).subscribe({
      next: (response: AccountDto) => {
        console.log(response);
        this.ngOnInit
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
