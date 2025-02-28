import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router){

     this.loginForm = this.formBuilder.group({
      email: ['sandra@gmail.com', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
}

  login(){
    if(this.loginForm.valid){
      console.log("llamar servicio login");
      this.router.navigateByUrl('/home');
      this.loginForm.reset();
    }else{
      alert('Error ingreso datos')
    }
  }
}
