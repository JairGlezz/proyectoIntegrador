import { Component } from '@angular/core';
import { Nav2Component } from "../nav2/nav2.component";
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { Footer2Component } from "../footer2/footer2.component";

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [Nav2Component, NavComponent, FooterComponent, Footer2Component],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  correo: string = 'ventas@mpgalimentos.com';
  correo2: string ='contacto@mpgalimentos.com';
  numero: string = '33 3161 5009 / 33 3161 7050';
  whatsapp: string = '33 1025 5768';
}
