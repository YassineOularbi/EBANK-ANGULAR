
import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  user: User | undefined;
  id: string | any;

  constructor(private userService: UserService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUser();
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
}
