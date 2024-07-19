import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';
import { CommonModule } from '@angular/common'; 
import { UserDto } from '../../../core/dtos/user.dto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getAll().subscribe({
      next: (response: User[]) => {
        this.users = response;
        console.log(this.users)
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  deleteUser(id: any): void{
    this.userService.delete(id).subscribe({
      next: (response: UserDto) => {
        let userDto: UserDto = response;
        console.log(userDto);
      },
      error: (err) =>{
        console.log(err)
      }
    })
  }
}
