import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Technology } from './technologies';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
  backend: string = '#555555';
  frontend: string = '#EB5E28';
  database: string = '#777777';

  technologies: Technology[] = [
    // FRONTEND
    {
      text: 'Angular',
      color: this.frontend
    },
    {
      text: 'React',
      color: this.frontend
    },
    {
      text: 'SSR / SSG',
      color: this.frontend
    },
    {
      text: 'HTML',
      color: this.frontend,
      icon: 'html5'
    },
    {
      text: 'CSS',
      color: this.frontend
    },
    {
      text: 'Javascript',
      color: this.frontend,
      icon: 'java-script'
    },
    {
      text: 'Typescript',
      color: this.frontend
    },
    // BACKEND
    {
      text: 'Git',
      color: this.backend
    },
    {
      text: 'GitHub',
      color: this.backend,
      icon: 'github'
    },
    {
      text: 'GitLab',
      color: this.backend,
      icon: 'gitlab'
    },
    {
      text: 'Node',
      color: this.backend
    },
    {
      text: 'Java',
      color: this.backend,
      icon: 'java'
    },
    {
      text: 'NestJS',
      color: this.backend
    },
    // DATABASE
    {
      text: 'SQL Server',
      color: this.database
    },
    {
      text: 'PostgreSQL',
      color: this.database
    },
    {
      text: 'MongoDB',
      color: this.database
    },
    {
      text: 'Firebase',
      color: this.database,
      icon: 'fire'
    }
  ];
}
