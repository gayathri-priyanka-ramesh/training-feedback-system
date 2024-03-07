import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AdminDataService,
  CourseData,
} from '../../../Services/admin-data.service';
import { NavigationService } from '../../../Services/navigation.service';

@Component({
  selector: 'app-admin-feedback-form-preview',
  templateUrl: './admin-feedback-form-preview.component.html',
})
export class AdminFeedbackFormPreviewComponent implements OnInit {
  // -------------------------Retrieve Required Data-------------------------
  requiredCourse: CourseData;
  moduleInfo: string;
  route: string;
  editRoute: string;
  // -------------------------End of Retrieve Required Data-------------------------

  // -------------------------Componenet Info-------------------------
  formPreview: boolean = true;
  // -------------------------End of Componenet Info-------------------------

  constructor(
    private routeParameterRetrieval: ActivatedRoute,
    private adminData: AdminDataService,
    private navigation: NavigationService
  ) {}

  ngOnInit(): void {
    // --------------------------------------------------Required Data Retrival--------------------------------------------------
    this.routeParameterRetrieval.paramMap.subscribe((value: any) => {
      // console.log(
      //   "Value passed inside the 'subscribe()' method (paramMap) ---> ",
      //   value
      // );
      // console.log(
      //   "Router Parameter Key 'id' and 'courseName' of the 'routerPath/:parameterName1/:parameterName2' given in 'app-routing.modules.ts')  ---> ",
      //   value.keys
      // );
      const id = value.get('id');
      // console.log(
      //   'Get the Router Parameter Value (id to be retrieved) --->   ',
      //   id
      // );
      const module = value.get('module');
      // console.log(
      //   'Get the Router Parameter Value (module to be retrieved) --->   ',
      //   module
      // );

      // -------------------------Required Course-------------------------
      this.requiredCourse = this.adminData.getCourseData()[id - 1];
      // console.log('Required Course  ---> ', this.requiredCourse);
      this.moduleInfo = module;
      // console.log('moduleInfo  ---> ', this.moduleInfo);
      this.route =
        '/admin/home/course/' +
        this.requiredCourse.id +
        '/' +
        this.requiredCourse.courseName;
      this.editRoute =
        '/admin/home/course/editFeedback/' +
        this.requiredCourse.id +
        '/' +
        this.requiredCourse.courseName +
        '/' +
        module;
    });
    // --------------------------------------------------End of Required Data Retrival--------------------------------------------------
  }

  ngAfterViewInit(): void {
    // -------------------------Fragment Routing-------------------------
    this.navigation.fragmentRouting();
  }
}
