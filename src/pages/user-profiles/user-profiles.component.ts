import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profiles',
  standalone: true,
  imports: [],
  templateUrl: './user-profiles.component.html',
  styleUrl: './user-profiles.component.css'
})
export class UserProfilesComponent {
  // You can bind these properties to the form fields for dynamic handling
  searchQuery: string = '';
  studentProfile = {
    name: '',
    dob: '',
    gender: ''
  };

  studentContact = {
    email: '',
    phone: ''
  };

  guardianDetails = {
    name: '',
    contact: ''
  };

  currentAddress = {
    addressLine: '',
    city: ''
  };

  expertiseEducation = {
    expertise: '',
    education: ''
  };

  saveChanges() {
    alert('Changes saved successfully!');
    console.log({
      studentProfile: this.studentProfile,
      studentContact: this.studentContact,
      guardianDetails: this.guardianDetails,
      currentAddress: this.currentAddress,
      expertiseEducation: this.expertiseEducation
    });
  }
}
