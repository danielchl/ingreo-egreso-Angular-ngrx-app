import { EstadisticaComponent } from "../ingreso-egreso/estadistica/estadistica.component";
import { IngresoEgresoComponent } from "../ingreso-egreso/ingreso-egreso.component";
import { Routes } from "@angular/router";
import { DetalleComponent } from "../ingreso-egreso/detalle/detalle.component";

export const dashboardRoutes: Routes = [
  { path: "ingreso-egreso", component: IngresoEgresoComponent },
  { path: "detalle", component: DetalleComponent },
  { path: "", component: EstadisticaComponent },
  { path: "**", redirectTo: "" }
];
