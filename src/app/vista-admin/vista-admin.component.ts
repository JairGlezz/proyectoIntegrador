import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";

@Component({
  selector: 'app-vista-admin',
  standalone: true,
  imports: [HeaderAdminComponent],
  templateUrl: './vista-admin.component.html',
  styleUrl: './vista-admin.component.css'
})
export class VistaAdminComponent {

}
