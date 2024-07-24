import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();
  

  setUser(user: User) {
    this.userSubject.next(user);
  }

  getUser(): User | null {
    return this.userSubject.value;
  }
}