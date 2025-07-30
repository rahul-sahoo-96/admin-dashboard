import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!:FormGroup;

  constructor(private fb:FormBuilder, private authService:AuthService, private router:Router){
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
      checkbox:[false]
    })
  }

  submit(){
    const {email, password} = this.loginForm.value
    this.authService.login(email, password).subscribe({
      next:()=>{
          this.router.navigate(['/dashboard'])
      },
    })
  }
}
