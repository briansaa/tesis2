import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Crear el formulario con validación
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Método para facilitar el acceso a los controles del formulario
  get f() {
    return this.loginForm.controls;
  }

  onLogin() {
    // Si el formulario es inválido, no hace nada
    if (this.loginForm.invalid) {
      return;
    }

    // Si el formulario es válido, redirigir al componente Home
    console.log('Login exitoso con:', this.loginForm.value);
    this.router.navigate(['/home']);
  }
}
