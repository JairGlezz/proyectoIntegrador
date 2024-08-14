import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductosComponent } from './productos/productos.component';
import { AuthGuard } from './auth.guard';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { VistaAdminComponent } from './vista-admin/vista-admin.component';
import { ProductosAdminComponent } from './productos-admin/productos-admin.component';
import { EstadisticasAdmiinComponent } from './estadisticas-admiin/estadisticas-admiin.component';
import { PedidosAdminComponent } from './pedidos-admin/pedidos-admin.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PedidoComponent } from './pedido/pedido.component';

export const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'conocenos', component: ConocenosComponent},
  {path: 'vista-admin', component: VistaAdminComponent},
  {path: 'productos-admin', component: ProductosAdminComponent},
  {path: 'estadisticas-admiin', component: EstadisticasAdmiinComponent},
  {path: 'pedidos-admin', component: PedidosAdminComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'pedido', component: PedidoComponent}
];