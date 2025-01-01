
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-frontpage',
  imports: [RouterModule,FormsModule ,CommonModule,],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css'
})
export class FrontpageComponent {
registrationForm: any;
gotoSubmit() {this.router.navigate(['loginpage']);
throw new Error('Method not implemented.');
}
  
  // constructor(private router: Router) {}

  // goToadmin1() {
  //   this.router.navigate(['/admin1']);
  // }
 
  isLoginClicked: boolean = false; // Flag to toggle dropdown visibility
  loginType: string = ''; // Holds the selected login type

  constructor(private router: Router) {}

  // Toggle login options visibility
  showLoginOptions(): void {
    this.isLoginClicked = !this.isLoginClicked;
  }

  // Handle login action based on selected login type
  
  
  
  
  onLogin(): void {
    if (this.loginType === 'admin') {
      this.router.navigate(['/admin1']);  // Navigate to Admin Dashboard
    } else if (this.loginType === 'user') {
      this.router.navigate(['/user-dashboard']);  // Navigate to User Dashboard
    } else {
      alert('Please select a login type');
    }
  }



  
}