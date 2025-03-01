import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthSupaService } from '../../../services/auth-supa.service';

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

  constructor(private fb: FormBuilder, private authSupaService : AuthSupaService, private router: Router){

     this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
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
      const { email, password } = this.loginForm.value;
      this.authSupaService.signIn(email, password).then((userData) => {
        console.log('Usuari logejat: ', userData);
        this.router.navigateByUrl('/home');
        this.loginForm.reset();
      }).catch((errorData) => {
        console.log('Error en login: ', errorData);
        this.loginError = errorData;
      }).finally(() => {
        console.info('Login completado');
      });
    }else{
     this.loginForm.markAllAsTouched();
    }
  }
}
