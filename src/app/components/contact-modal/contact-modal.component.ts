import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [SharedModule, ModalComponent],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss'
})
export class ContactModalComponent {
  isVisible: Boolean = false;

  constructor() {}

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
