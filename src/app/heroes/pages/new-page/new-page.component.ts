import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  template: `<p>Heroes new-page works!</p>`,
  styleUrl: './new-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPageComponent { }
