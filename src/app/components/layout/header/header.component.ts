import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ModalComponent } from "../../modal/modal.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, ModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isMobile: boolean = false;

  isVisible: Boolean = false;

  openContactModal(): void {
    this.isVisible = true;
  }

  closeContactModal(): void {
    this.isVisible = false;
  }

  onSendContact(): void {
    // TO-DO
    this.closeContactModal();
  }
}
