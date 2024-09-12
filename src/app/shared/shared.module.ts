import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgZorroAntdModule } from './antd.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterLink,
		RouterOutlet,
    NgZorroAntdModule
	],
	exports: [
		CommonModule,
		RouterLink,
		RouterOutlet,
    NgZorroAntdModule
	],
  providers: []
})
export class SharedModule {}
