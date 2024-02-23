import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AdminDataService,
  CourseData,
  InstructorData,
  ParticipantData,
} from '../../../Services/admin-data.service';
import { NavigationService } from '../../../Services/navigation.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-instructor-ongoing-course',
  templateUrl: './admin-instructor-ongoing-course.component.html',
})
export class AdminInstructorOngoingCourseComponent
  implements OnInit, AfterViewInit
{
  // -------------------------Retrieve Required Data-------------------------
  requiredInstructor: InstructorData;
  requiredCourse: CourseData;
  starsArray: number[];
  participantList: ParticipantData[];
  // -------------------------End of Retrieve Required Data-------------------------

  // -------------------------Info Area Rings-------------------------
  ringsData: { value: number; title: string; href: string }[];
  // -------------------------End of Info Area Rings-------------------------

  // -------------------------Module Number-------------------------
  moduleNumber: string[] = ['Module 4', 'Module 3', 'Module 2', 'Module 1'];
  // -------------------------End of Module Number-------------------------

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
      console.log(
        "Value passed inside the 'subscribe()' method (paramMap) ---> ",
        value
      );
      console.log(
        "Router Parameter Key 'id' and 'courseName' of the 'routerPath/:parameterName1/:parameterName2' given in 'app-routing.modules.ts')  ---> ",
        value.keys
      );
      const iid = value.get('iid');
      console.log(
        'Get the Router Parameter Value (iid to be retrieved) --->   ',
        iid
      );
      const id = value.get('id');
      console.log(
        'Get the Router Parameter Value (id to be retrieved) --->   ',
        id
      );

      // -------------------------Required Instructor-------------------------
      this.requiredInstructor = this.adminData.getInstructorData()[iid - 1];
      console.log('Required Instructor  ---> ', this.requiredInstructor);

      // -------------------------Required Course-------------------------
      this.requiredCourse = this.adminData.getCourseData()[id - 1];
      console.log('Required Course  ---> ', this.requiredCourse);
      this.starsArray = this.adminData.getStars(this.requiredCourse.rating);

      // -------------------------Participant List-------------------------
      this.participantList = this.adminData
        .getParticipantData()
        .slice(0, this.requiredCourse.participantCount);
      console.log('Participant List ---> ', this.participantList);

      // -------------------------Info Area Ring Data-------------------------
      this.ringsData = [
        {
          value: this.requiredCourse.participantCount,
          title: 'Participants',
          href: 'course-participants',
        },
      ];
      // -------------------------End of Info Area Ring Data-------------------------
      // --------------------------------------------------End of Required Data Retrival--------------------------------------------------
    });

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
  }
}
