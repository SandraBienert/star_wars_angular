import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

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


  constructor(private auth: Auth, private router: Router){}


  onSubmit(){
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      createUserWithEmailAndPassword(this.auth, email, password) // Registra l'usuari amb Firebase
        .then((userCredential) => {
          console.log('Usuari registrat: ', userCredential.user);
          this.router.navigateByUrl('/login'); // Redirigeix a la pàgina d'inici
        })
        .catch((error) => {
          console.log('Error en el registre: ', error);
          // Mostra un missatge d'error a l'usuari
          alert(this.getErrorMessage(error.code));
        });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

   // Funció per mostrar missatges d'error més descriptius
   getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'Aquest correu electrònic ja està en ús.';
      case 'auth/invalid-email':
        return 'El correu electrònic no és vàlid.';
      case 'auth/weak-password':
        return 'La contrasenya és massa feble.';
      default:
        return 'Hi ha hagut un error en el registre.';
    }
  }

}
