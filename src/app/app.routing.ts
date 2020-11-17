// 1º (importar modulo desde @angular/core)
import { ModuleWithProviders } from '@angular/core';
// 2º (importar routes y modulo de rutas from @angular/router)
import { Routes, RouterModule } from '@angular/router';

// 10º (importar componentes a mostrar cuando la url coincida con el path)
import { TablaEmpleadosComponent } from './components/tablaempleados/tablaempleados.component';
import { DetallesEmpleadoComponent } from './components/detalles-empleado/detalles-empleado.component';

// 3º (definir rutas, en una constante, para exportarlas como un array de rutas, siendo el proveedor)

const appRoutes: Routes = [
  // 11º (definir path y componente a mostrar)
  { path: 'empleados', component: TablaEmpleadosComponent },
  { path: 'detallesempleado/:empno', component: DetallesEmpleadoComponent },
  //   12º IR A COMPONENT.HTML
];
// 4º (exportar proveedor de rutas)
export const appRoutingProvider: any[] = [];
// 6º exportar la constante routing, que es un modulo con el proveedor de rutas, para el root.
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
// 7º IR A MODULE.ts
