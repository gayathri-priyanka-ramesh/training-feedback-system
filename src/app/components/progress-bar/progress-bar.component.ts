import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  // --------------------------------------------------Progress Bar--------------------------------------------------
  template: `
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        [style.width]="progressValue + '%'"
        [attr.aria-valuenow]="progressValue"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ progressValue }}% Complete
      </div>
    </div>
  `,
  // --------------------------------------------------End of Progress Bar--------------------------------------------------
})
export class ProgressBarComponent {
  // -------------------------Input Required Variable-------------------------
  @Input() progressValue: number = 0;
  // -------------------------End of Input Required Variable-------------------------
}
