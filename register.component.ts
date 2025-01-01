
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule,FormsModule,RouterLink, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {



  client={
    client_name :['', Validators.required],
    client_mobileno :'',  
    client_password : '',
    client_email : ''
  /*['', Validators.required],
  ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
  ['', [Validators.required, Validators.minLength(6)]],
  ['', [Validators.required, Validators.email]]*/
  }

  
  //private apiUrl = 'http://localhost:9006/api/CreateClient'; // Adjust the URL if needed
  //registrationForm: any;
  
  constructor(private http: HttpClient, private router: Router)  { }

  // onSubmit() {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   this.http.post(this.apiUrl, this.client, { headers })
  //     .subscribe(
  //       response => {
  //         console.log('Client Register Successfully:', response);
  //         // Optionally, redirect or show a success message
  //         this.router.navigate(['/loginpage']);
  //       },
  //       error => {
  //         console.error('Error In Registration:', error);
  //       }
  //     );
  // }
  
/*gotoSubmit(){
     this.router.navigate(['loginpage']);
   }*/
     onSubmit(form: NgForm): void {
      if (form.valid) {
          console.log("Form Submitted!", form.value);
         this.createClient(form.value)
      } else {
          console.error("Form is invalid");
      }
  }
  gotoSubmit(){
    this.router.navigate(['loginpage']);
  }

    
  createClient(clientData: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('http://localhost:9006/api/CreateClient', clientData, { headers })
      .subscribe(
        response => {
          console.log('Client created successfully:', response);
          alert('Registration successful!');
          this.router.navigate(['loginpage']); // Redirect to login page
        },
        error => {
          console.error('Error creating client:', error);
          alert('Error in registration. Please try again.');
        }
      );
  }
  

    
}



// =====================================================================================================================================

// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
// import { Router, RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   imports: [CommonModule,ReactiveFormsModule,RouterLink],
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
// onSubmit() {
// throw new Error('Method not implemented.');
// }
//   registrationForm!: FormGroup;
//   submitted: boolean=false;
//   successMessage: string='';
//   route: any;

//   // constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.registrationForm = this.fb.group({
//       customerName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Adjust regex as per your requirement
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       confirmPassword: ['', Validators.required],
//     }, { validator: this.passwordMatcher });
//   }

//   // Custom validator to check if password and confirm password match
//   passwordMatcher(control: FormGroup): { [key: string]: boolean } | null {
//     const password = control.get('password');
//     const confirmPassword = control.get('confirmPassword');
//     if (password && confirmPassword && password.value !== confirmPassword.value) {
//       return { 'mismatch': true };
//     }
//     return null;
//   }

//   // onSubmit(): void {
//   //   if (this.registrationForm.valid) {
//   //     this.successMessage='Registraion Process Done..!'
//   //     console.log(this.registrationForm.value);
//   //     // You can send the form data to a server or handle it accordingly
//   //   } else {
//   //     console.log('Form is invalid');
//   //   }
//   // }
//   constructor(private router:Router , private fb: FormBuilder){}
// gotoSubmit(){
//   this.router.navigate(['loginpage']);
// }

// }

