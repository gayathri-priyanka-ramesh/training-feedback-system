import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private routeParameterRetrieval: ActivatedRoute) {}

  // --------------------------------------------------Fragement Routing--------------------------------------------------
  fragmentRouting() {
    this.routeParameterRetrieval.fragment.subscribe((fragment) => {
      if (fragment) {
        console.log('Fragment  ---> ', fragment);
        const element = document.getElementById(fragment);
        console.log('Element  ---> ', element);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
  // --------------------------------------------------End of Fragement Routing--------------------------------------------------
}
