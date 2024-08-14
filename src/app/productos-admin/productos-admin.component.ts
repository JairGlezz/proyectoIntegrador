import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";

@Component({
  selector: 'app-productos-admin',
  standalone: true,
  imports: [HeaderAdminComponent],
  templateUrl: './productos-admin.component.html',
  styleUrl: './productos-admin.component.css'
})
export class ProductosAdminComponent {

}
