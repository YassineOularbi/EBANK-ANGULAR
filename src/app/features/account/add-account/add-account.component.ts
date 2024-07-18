import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountType } from '../../../core/enums/account-type.enum';
import { AccountDto } from '../../../core/dtos/account.dto';
import { AccountService } from '../../../core/services/account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-account',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css'
})
export class AddAccountComponent {
  accountForm: FormGroup;
  accountTypes = Object.values(AccountType);

  constructor(private fb: FormBuilder, private accountService: AccountService) {
    this.accountForm = this.fb.group({
      type: ['', Validators.required],
      balance: ['', [Validators.required, Validators.min(0)]],
      user_id: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem("auth-token")){
      console.log(window.sessionStorage.getItem("auth-token"))
    }
  }

  onSubmit(): void {
    if (this.accountForm.valid) {
      const accountDto: AccountDto = this.accountForm.value;
      console.log('Form Submitted', accountDto);
      this.accountService.addAccount(accountDto).subscribe(
        data => {
          console.log(data)
        },
        err => {
          console.log(err)
        }
      )
    }
  }
}
