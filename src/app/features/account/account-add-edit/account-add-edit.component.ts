import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../../core/services/account.service';
import { AccountDto } from '../../../core/dtos/account.dto';
import { AccountType } from '../../../core/enums/account-type.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../../core/models/account.model';

@Component({
  selector: 'app-account-add-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './account-add-edit.component.html',
  styleUrls: ['./account-add-edit.component.css']
})
export class AccountAddEditComponent implements OnInit {

  isEditMode: boolean = false;
  AccountForm: FormGroup;
  accountTypes = [AccountType[0], AccountType[1]];
  account: Account | undefined;
  id: string | any = null;

  constructor(
    private accountService: AccountService, 
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.AccountForm = this.fb.group({
      type: ['', Validators.required],
      balance: ['', [Validators.required, Validators.min(0)]],
      user_id: ['', Validators.required]
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
    this.accountService.getById(this.id).subscribe({
      next: (response: Account) => {
        console.log(response)
        this.account = response;
        this.AccountForm.patchValue({
          type: response.type,
          balance: response.balance,
        });
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  onSubmit(): void {
    if (this.AccountForm.valid) {
      let account: AccountDto = this.AccountForm.value as AccountDto;
      if (this.isEditMode && this.id) {
        this.accountService.update(this.id, account).subscribe({
          next: (response: AccountDto) => {
            console.log('Account updated:', response);
            this.router.navigate(['/accounts']);
          },
          error: (err) => {
            console.error('Update error:', err);
          }
        });
      } else {
        this.accountService.add(account).subscribe({
          next: (response: AccountDto) => {
            console.log('Account added:', response);
            this.router.navigate(['/accounts']);
          },
          error: (err) => {
            console.error('Add error:', err);
          }
        });
      }
    }
  }
}
