import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from '@angular/fire/auth'; // Importa Firebase
import { FirebaseError } from 'firebase/app';


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

  constructor(private auth: Auth, private router: Router, private fb: FormBuilder){

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

 async login(){
    if(this.loginForm.valid){
      const { email, password } = this.loginForm.value;
      try {
        const userCredential = await signInWithEmailAndPassword(this.auth, email, password); // Inicia sessió amb Firebase
        console.log('Usuari logejat: ', userCredential.user);
        this.router.navigateByUrl('/home'); // Redirigeix a la pàgina d'inici
        this.loginForm.reset();
      } catch (error) {
        console.log('Error en login: ', error);
        this.loginError = 'Correu electrònic o contrasenya incorrectes'; // Mostra un missatge d'error
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider(); // Crea una instància de GoogleAuthProvider
    try {
      const result = await signInWithPopup(this.auth, provider); // Inicia sessió amb Google
      console.log('Usuari logejat amb Google: ', result.user);
      this.router.navigateByUrl('/home'); // Redirigeix a la pàgina d'inici
    } // Al catch:
    catch (error) {
      console.log('Error en l\'inici de sessió amb Google: ', error);
      const firebaseError = error as FirebaseError; // Converteix l'error a FirebaseError
      alert(this.getErrorMessage(firebaseError.code)); // Mostra un missatge d'error
    }
  }

  // Funció per mostrar missatges d'error més descriptius
  getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/popup-closed-by-user':
        return 'La finestra d\'inici de sessió es va tancar abans de completar el procés.';
      case 'auth/cancelled-popup-request':
        return 'S\'ha cancel·lat la sol·licitud d\'inici de sessió.';
      default:
        return 'Hi ha hagut un error en l\'inici de sessió amb Google.';
    }
  }
}
