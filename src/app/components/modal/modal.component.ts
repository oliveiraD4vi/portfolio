import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NzButtonType } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isVisible: Boolean = false;
  @Input() buttonType: NzButtonType = 'primary';

  @Output() onOpen: EventEmitter<void> = new EventEmitter<void>();
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  showModal(): void {
    this.onOpen.emit();
  }

  handleClose(): void {
    this.onClose.emit();
  }
}
