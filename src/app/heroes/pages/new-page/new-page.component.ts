import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>new-page works!</p>`,
  styleUrl: './new-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPageComponent { }
