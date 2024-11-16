import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormField, MatInput, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authService: any;

  user = { username: '',password: '' };

  constructor(private router: Router) {}

  login() {
    this.authService.login(this.user).subscribe(
      () => alert('Login successfull!!'),
      () => alert('Login failed!!')
    );
    this.router.navigate(['/view-all']);
  };
};
