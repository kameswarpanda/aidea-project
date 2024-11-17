import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../Authservice/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],  // Add BrowserModule and FormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected `styleUrl` to `styleUrls`
})
export class LoginComponent {
  mobileNumber: string = '';
  otp: string = '';
  otpSent: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    // After successful login (e.g., form validation)
    this.authService.login(); // Set login state to true
  }

  sendOtp() {
    if (this.mobileNumber.length === 10) {
      this.otpSent = true;
      alert('OTP sent to your mobile number!');
      // Here, you can call an API to send OTP.
    } else {
      alert('Please enter a valid 10-digit mobile number.');
    }
  }

  verifyOtp() {
    if (this.otp.length === 6) {
      alert('OTP Verified Successfully!');
      // Navigate to the user profile page after successful verification
      this.router.navigate(['/dashboard/progress']);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  }
}
