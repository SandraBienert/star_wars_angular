import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/auth/login.service';
import { loginRequest } from '../../../services/auth/loginRequest.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  loginError: string = '';

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService){

     this.loginForm = this.fb.group({
      email: ['lanalane@gmail.com', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.controls['email'];
  }

  get password(){
    return this.loginForm.controls['password'];
  }

  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as loginRequest).subscribe({
          next: (userData) => {
            console.log('Usuari logejat: ', userData);
          },
          error: (errorData)  => {
            console.log('Error en login: ', errorData);
            this.loginError = errorData;
          },
          complete: () => {
            console.info('Login completado')
            this.router.navigateByUrl('/home');
            this.loginForm.reset();
          }
          })
    }else{
     this.loginForm.markAllAsTouched();
    }
  }
}
