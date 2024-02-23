import { Component, Input } from '@angular/core';

// [routerLink]="ring.href"
@Component({
  selector: 'app-data-ring',
  // --------------------------------------------------Data Ring--------------------------------------------------
  template: `
    <!-- --------------------------------------------------Rings-------------------------------------------------- -->
    <div class="data-info d-flex">
      <a
        *ngFor="let ring of ringsData"
        (click)="scroll(ring.href)"
        [class.linkRing]="ring.href !== ''"
      >
        <div class="data d-flex flex-column">
          <!-- -------------------------Ring Value------------------------- -->
          <div class="progressbar">
            <svg>
              <circle cx="80" cy="80" r="45" class="svg-circle"></circle>
            </svg>
            <span class="text-circle">{{ ring.value }}</span>
          </div>
          <!-- -------------------------End of Ring Value------------------------- -->

          <!-- -------------------------Ring Info------------------------- -->
          <div class="text">
            <p>{{ ring.title }}</p>
          </div>
          <!-- -------------------------End of Ring Info------------------------- -->
        </div>
      </a>
    </div>
    <!-- --------------------------------------------------End of Rings-------------------------------------------------- -->
  `,
  // --------------------------------------------------End of Data Ring--------------------------------------------------
})
export class DataRingComponent {
  // -------------------------Input Required Variables-------------------------
  @Input() ringsData: { value: number; title: string; href: string }[];
  // -------------------------End of Input Required Variables-------------------------

  // -------------------------Ring Link-------------------------
  scroll(href: string) {
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });
  }
  // -------------------------End of Ring Link-------------------------
}
