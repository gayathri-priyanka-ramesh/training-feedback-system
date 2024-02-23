import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <!-- --------------------------------------------------Breadcrumbs-------------------------------------------------- -->
    <nav class="breadcrump-pane container-fluid">
      <app-ng-dynamic-breadcrumb></app-ng-dynamic-breadcrumb>
    </nav>
    <!-- --------------------------------------------------End of Breadcrumbs-------------------------------------------------- -->
  `,
})
export class BreadcrumbComponent {}
