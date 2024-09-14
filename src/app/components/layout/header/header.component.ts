import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ContactModalComponent } from "../../contact-modal/contact-modal.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, ContactModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isMobile: boolean = false;
}
