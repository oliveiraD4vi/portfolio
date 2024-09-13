import { Component, HostListener } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { RenderService } from './services/render/render.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMobile: boolean = false;

  constructor(
    private renderService: RenderService
  ) {
    if (this.renderService.isClientSide()) {
      this.onResize();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    // Check if the window width is lesser than 768
    this.isMobile = window.innerWidth < 768;
  }
}
