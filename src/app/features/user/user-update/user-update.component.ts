import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserDto } from '../../../core/dtos/user.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent implements OnInit {
  user: User | undefined;
  formUpdate: FormGroup;
  id: string | any;

  constructor(private userService: UserService, private route: ActivatedRoute, private fb: FormBuilder){
    this.formUpdate = this.fb.group({
      name: ['', Validators.required],
      mail: ['', [Validators.required]],
      username: ['', Validators.required],
      phone: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUser()
  }

  getUser(): void{
    if(this.id != null){
      this.userService.getById(this.id).subscribe({
        next: (response: User) => {
          this.user = response
          console.log(this.user)
        }, 
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

  onSubmit(): void{
    if(this.formUpdate.valid){
      const userUpdated: UserDto = this.formUpdate.value as UserDto;
      this.userService.update(this.id, userUpdated).subscribe({
        next: (response: UserDto) => {
          let userDto: UserDto = response;
          console.log(userDto);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }
}
