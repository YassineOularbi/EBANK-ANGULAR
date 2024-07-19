import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../../core/services/account.service';
import { ActivatedRoute } from '@angular/router';
import { AccountClosingDto } from '../../../core/dtos/account-closing.dto';
import { AccountDto } from '../../../core/dtos/account.dto';

@Component({
  selector: 'app-account-close',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './account-close.component.html',
  styleUrl: './account-close.component.css'
})
export class AccountCloseComponent implements OnInit {
  closingForm: FormGroup;
  id: string | any;

  constructor(private accountService: AccountService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.closingForm = this.fb.group({
      closingReason: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  onSubmit(): void{
    if(this.closingForm.valid){
      let accountClosing: AccountClosingDto = this.closingForm.value as AccountClosingDto;
      this.accountService.close(this.id, accountClosing).subscribe({
        next: (response: AccountDto) => {
          console.log(response);
        },
        error: (err) => {
          console.log(err);
          
        }
      })
    }
  }
}
