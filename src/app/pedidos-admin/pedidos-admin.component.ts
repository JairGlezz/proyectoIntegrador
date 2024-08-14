import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";

@Component({
  selector: 'app-pedidos-admin',
  standalone: true,
  imports: [HeaderAdminComponent],
  templateUrl: './pedidos-admin.component.html',
  styleUrl: './pedidos-admin.component.css'
})
export class PedidosAdminComponent {

}
