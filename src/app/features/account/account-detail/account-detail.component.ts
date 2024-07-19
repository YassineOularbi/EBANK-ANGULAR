import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../core/services/account.service';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../../../core/models/account.model';

@Component({
  selector: 'app-account-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './account-detail.component.html',
  styleUrl: './account-detail.component.css'
})
export class AccountDetailComponent implements OnInit {
  id: string | any;
  account: Account | undefined;

  constructor(private accountService: AccountService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getById()
  }

  getById() {
    this.accountService.getById(this.id).subscribe({
      next: (response: Account) => {
        this.account = response;
        console.log(response)
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
