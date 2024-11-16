import { Component, NgModule } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { MatFormField } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [MatFormField, MatButtonModule, MatInput],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})

export class RegistrationComponent {

  authService: any;

  user = { username: '',password: '' };

  constructor(private snackBar: MatSnackBar) {}

  register() {
    this.authService.register(this.user).subscribe(
      () => alert('Registration successfull!!'),
      () => alert('Registration failed!!')
    );
  }
}
