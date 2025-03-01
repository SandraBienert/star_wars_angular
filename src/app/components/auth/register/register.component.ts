import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthSupaService } from '../../../services/auth-supa.service';
import { Router } from '@angular/router';
import { supa } from '../../../environment/supa';
import { asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    email: new FormControl<any>('', [Validators.required, Validators.email]),
    password: new FormControl<any>('', [Validators.required]),
  });


  constructor( private authSupaService: AuthSupaService, private router: Router){}


  onSubmit(){
    this.authSupaService.signUp(this.registerForm.value.email, this.registerForm.value.password)
    .then((resp: any) => {
      console.log(resp);
    })
    .catch((err) =>{
      console.log(err)
    })
  }


}
