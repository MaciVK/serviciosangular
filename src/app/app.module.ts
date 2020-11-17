import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonasComponent } from './components/personas/personas.component';
import { CochesComponent } from './components/coches/coches.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosSalarioComponent } from './components/empleados-salario/empleados-salario.component';
// 7º CONTINUACION ROUTING (importar las constantes exportadas en routing.ts)
import { routing, appRoutingProvider } from './app.routing';
import { TablaEmpleadosComponent } from './components/tablaempleados/tablaempleados.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    PersonasComponent,
    CochesComponent,
    EmpleadosSalarioComponent,
    TablaEmpleadosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // 8º ROUTING (importar la constante routing)
    routing,
  ],
  providers: [
    // 9º ROUTING (proveedor de rutas)
    appRoutingProvider,
    // 10º IR A ROUTING
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
