import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { Nav2Component } from "../nav2/nav2.component";
import { FooterComponent } from "../footer/footer.component";
import { Footer2Component } from "../footer2/footer2.component";

@Component({
  selector: 'app-conocenos',
  standalone: true,
  imports: [NavComponent, Nav2Component, FooterComponent, Footer2Component],
  templateUrl: './conocenos.component.html',
  styleUrl: './conocenos.component.css'
})
export class ConocenosComponent {

}
