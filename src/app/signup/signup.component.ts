// signup.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email = '';
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  password = '';
  confirmPassword = '';
  rememberMe = false;
  company = '';
  street = '';
  city = '';
  postalCode = '';
  postalCodePattern = /^[0-9]{4}$/;
  showError = false;
  errorMessages = [];
  //removed "string" from the variable declarations

  constructor() { }

  ngOnInit(): void {
    
  }

  register(form: NgForm): void {
    console.log('Register function called');
  
    // Reset error messages and show error flag
    this.showError = false;
    this.errorMessages = [];
  
    if (form.valid) {
      // Registration is valid, perform registration logic
      console.log('Registration successful');
    } else {
      // Registration is invalid, display error messages
      this.showError = true;
  
      if (this.password !== this.confirmPassword) {
        this.errorMessages.push('The passwords do not match.');
      }
      if (this.email !== '' && !this.email.match(this.emailPattern)) {
        this.errorMessages.push('The email address is not valid.');
      }
      if (this.postalCode !== '' && !this.postalCode.match(this.postalCodePattern)) {
        this.errorMessages.push('Please enter a valid postal code.');
      }
      if (!this.email || !this.password || !this.confirmPassword) {
        this.errorMessages.push('Please fill all required fields.');
      }
      if (this.password.length < 8) {
        this.errorMessages.push('The password must be at least 8 characters long.');
      }
  
      console.error(this.errorMessages);
    }
  }

  togglePasswordVisibility(): void {
    const passwordField = document.getElementById('password') as HTMLInputElement;
    const confirmPasswordField = document.getElementById('confirmPassword') as HTMLInputElement;
    if (passwordField && confirmPasswordField) {
      const type = passwordField.type === 'password' ? 'text' : 'password';
      passwordField.type = type;
      confirmPasswordField.type = type;
    }
  }
}
