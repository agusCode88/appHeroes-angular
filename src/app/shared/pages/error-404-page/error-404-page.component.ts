import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-404-page',
  template: `<p>error-404-page works!</p>`,
  styleUrl: './error-404-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404PageComponent { }
