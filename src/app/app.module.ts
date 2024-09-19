import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { NavbarComponent } from './navbar/navbar.component';*/
/*import { SidebarComponent } from './sidebar/sidebar.component';*/
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RastrearComponent } from './rastrear/rastrear.component';
import { PagaloComponent } from './pagalo/pagalo.component';
import { AgenciasComponent } from './agencias/agencias.component';
import { TarifasComponent } from './tarifas/tarifas.component';
import { AgenciaDetalleComponent } from './agencia-detalle/agencia-detalle.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlotaInfoComponent } from './flota-info/flota-info.component';
import { RutasHorariosComponent } from './rutas-horarios/rutas-horarios.component';
import { ServiciosTerrestreComponent } from './servicios-terrestre/servicios-terrestre.component';
import { ServiciosAereoComponent } from './servicios-aereo/servicios-aereo.component';
import { EnvioCrearComponent } from './envio-crear/envio-crear.component';
import { EnvioHistorialComponent } from './envio-historial/envio-historial.component';

@NgModule({
  declarations: [
    AppComponent,
   /* NavbarComponent,*/
   /* SidebarComponent,*/
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    RastrearComponent,
    PagaloComponent,
    AgenciasComponent,
    TarifasComponent,
    AgenciaDetalleComponent,
    SidebarComponent,
    FlotaInfoComponent,
    RutasHorariosComponent,
    ServiciosTerrestreComponent,
    ServiciosAereoComponent,
    EnvioCrearComponent,
    EnvioHistorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule  // Importa este módulo

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
