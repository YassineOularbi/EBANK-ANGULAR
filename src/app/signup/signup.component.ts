import { Component } from '@angular/core';
import { UserDto } from '../dto/user-dto.model';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userDto: UserDto = new UserDto('', '', '', '', ''); // Initialisez l'objet UserDto avec des valeurs par défaut

  constructor(private authService: AuthService) { }

  signup() {
    this.authService.signup(this.userDto).subscribe(
      (response) => {
        // Gérer la réponse de l'inscription ici si nécessaire
        console.log('Signup successful:', response);
      },
      (error) => {
        console.error('Error during signup:', error);
        // Gérer les erreurs ici
      }
    );
  }
}