import { Component } from '@angular/core';
import { Nav2Component } from "../nav2/nav2.component";
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { Footer2Component } from "../footer2/footer2.component";

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [Nav2Component, NavComponent, FooterComponent, Footer2Component],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {

}
