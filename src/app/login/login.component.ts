import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  password = '';
  showPassword = false;
  rememberMe = false;
  //removed "string" from the variable declarations

  constructor() { }

  login(): void {
    if (this.email === 'test@test.at' && this.password === '12345678') {
      console.log('Login successful.');
      alert('Login successful.');
    } else {
      console.error('Login failed.');
      alert('Login failed.');
    }
  }

  togglePasswordVisibility(): void {
    const passwordField = document.getElementById('loginpassword') as HTMLInputElement;
    if (passwordField) {
      const type = passwordField.type === 'password' ? 'text' : 'password';
      passwordField.type = type;
    }
  }
  
}
