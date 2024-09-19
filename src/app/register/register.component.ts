import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit() {
    // El formulario ya está inicializado en el constructor
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : {'passwordMismatch': true};
  }

  onRegister() {
    if (this.registerForm.valid) {
      // Aquí iría la lógica para procesar el registro
      console.log(this.registerForm.value);
      
      // Simulamos un registro exitoso
      // En una aplicación real, aquí llamarías a un servicio de autenticación
      setTimeout(() => {
        // Redirigir al usuario a la página de inicio
        this.router.navigate(['/home']);
      }, 1000); // Simulamos un delay de 1 segundo
    }
  }
}