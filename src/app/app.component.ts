import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { Nav2Component } from './nav2/nav2.component';
import { RegistroComponent } from './registro/registro.component';
import { FooterComponent } from './footer/footer.component';
import { Footer2Component } from './footer2/footer2.component';
import { ProductosComponent } from './productos/productos.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { VistaAdminComponent } from './vista-admin/vista-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ProductosAdminComponent } from './productos-admin/productos-admin.component';
import { EstadisticasAdmiinComponent } from './estadisticas-admiin/estadisticas-admiin.component';
import { PedidosAdminComponent } from './pedidos-admin/pedidos-admin.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PedidoComponent } from './pedido/pedido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InicioComponent,
    LoginComponent,
    NavComponent,
    Nav2Component,
    RegistroComponent,
    FooterComponent,
    Footer2Component,
    ProductosComponent,
    ConocenosComponent,
    VistaAdminComponent,
    HeaderAdminComponent,
    ProductosAdminComponent,
    EstadisticasAdmiinComponent,
    PedidosAdminComponent,
    ContactoComponent,
    PedidoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corregir el nombre a styleUrls
})
export class AppComponent {
  title = 'Proyecto-Front';
}

