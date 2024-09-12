import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterLink,
		RouterOutlet,
	],
	exports: [
		CommonModule,
		FormsModule,
		RouterLink,
		ReactiveFormsModule,
		RouterOutlet,
	],
  providers: []
})
export class SharedModule {}
