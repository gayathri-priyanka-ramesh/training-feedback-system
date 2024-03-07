import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AdminDataService,
  CourseData,
} from '../../../Services/admin-data.service';
import { NavigationService } from '../../../Services/navigation.service';

@Component({
  selector: 'app-admin-edit-feedback',
  templateUrl: './admin-edit-feedback.component.html',
})
export class AdminEditFeedbackComponent implements OnInit, AfterViewInit {
  // -------------------------Retrieve Required Data-------------------------
  requiredCourse: CourseData;
  moduleInfo: string;
  route: string;
  // -------------------------End of Retrieve Required Data-------------------------

  // -------------------------Component Info-------------------------
  editFeedback: boolean = true;
  // -------------------------End of Component Info-------------------------

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
        '/admin/home/course/feedbackFormPreview/' +
        this.requiredCourse.id +
        '/' +
        this.requiredCourse.courseName +
        '/' +
        this.moduleInfo;
    });
    // --------------------------------------------------End of Required Data Retrival--------------------------------------------------
  }

  ngAfterViewInit(): void {
    // -------------------------Fragment Routing-------------------------
    this.navigation.fragmentRouting();
  }
}
