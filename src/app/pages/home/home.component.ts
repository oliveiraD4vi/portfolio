import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PresentationComponent } from "../../components/presentation/presentation.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, PresentationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
