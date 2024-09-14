import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PresentationComponent } from "../../components/presentation/presentation.component";
import { TechnologiesComponent } from "../../components/technologies/technologies.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, PresentationComponent, TechnologiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
