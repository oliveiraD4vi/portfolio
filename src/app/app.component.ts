import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
