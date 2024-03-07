import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AdminDataService,
  CourseData,
  ParticipantData,
} from '../../../Services/admin-data.service';
import { NavigationService } from '../../../Services/navigation.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
})
export class AdminCourseComponent implements OnInit, AfterViewInit, OnDestroy {
  // -------------------------Retrieve Required Data-------------------------
  requiredCourse: CourseData;
  starsArray: number[];
  participantList: ParticipantData[];
  // -------------------------End of Retrieve Required Data-------------------------

  // -------------------------Info Area Rings-------------------------
  ringsData: { value: number; title: string; href: string }[];
  // -------------------------End of Info Area Rings-------------------------

  // -------------------------Module Details-------------------------
  modules: { moduleNumber: string[]; title: string; route: string }[] = [
    {
      moduleNumber: ['Module 7', 'Module 6'],
      title: 'Create New Feedback',
      route: '/admin/home/course/createFeedback',
    },
    {
      moduleNumber: ['Module 5', 'Module 4'],
      title: 'Edit Existing Feedback',
      route: '/admin/home/course/editFeedback',
    },
    {
      moduleNumber: ['Module 3', 'Module 2', 'Module 1'],
      title: 'View Feedback Responses',
      route: '/admin/home/course/viewFeedback',
    },
  ];
  // -------------------------End of Module Details-------------------------

  // -------------------------Data Table Variables-------------------------
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  // -------------------------End of Data Table Variables-------------------------

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

      // -------------------------Required Course-------------------------
      this.requiredCourse = this.adminData.getCourseData()[id - 1];
      console.log('Required Course  ---> ', this.requiredCourse);
      this.starsArray = this.adminData.getStars(this.requiredCourse.rating);
    });

    // -------------------------Participant Data-------------------------
    this.participantList = this.adminData
      .getParticipantData()
      .slice(0, this.requiredCourse.participantCount);
    console.log('Participant List  ---> ', this.participantList);

    // -------------------------Info Area Rings Data-------------------------
    this.ringsData = [
      { value: 35, title: 'Feedback', href: 'feedback' },
      {
        value: this.requiredCourse.participantCount,
        title: 'Participants',
        href: 'course-participants',
      },
      {
        value: this.requiredCourse.applicantCount,
        title: 'Applicants',
        href: 'course-applications',
      },
    ];
    // -------------------------End of Info Area Rings Data-------------------------
    // --------------------------------------------------End of Required Data Retrival--------------------------------------------------

    // -------------------------Data Table Options-------------------------
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'Bfrtip',
    };
    // -------------------------End of Data Table Options-------------------------
  }

  ngAfterViewInit(): void {
    // -------------------------Fragment Routing-------------------------
    this.navigation.fragmentRouting();
    // -------------------------Data Table Trigger-------------------------
    this.dtTrigger.next(null);
  }

  ngOnDestroy(): void {
    // -------------------------Data Table Trigger-------------------------
    this.dtTrigger.unsubscribe();
  }
}
