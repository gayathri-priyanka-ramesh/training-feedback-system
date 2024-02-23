import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  CourseCardDataService,
  OngoingCourse,
} from '../../../Services/course-card-data.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../../Services/navigation.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-instructor-ongoing-course',
  templateUrl: './instructor-ongoing-course.component.html',
})
export class InstructorOngoingCourseComponent implements OnInit, AfterViewInit {
  // -------------------------Retrieve Required Data-------------------------
  requiredCourse: OngoingCourse;
  starArray: number[];
  // -------------------------End of Retrieve Required Data-------------------------

  // -------------------------Info Area Rings-------------------------
  ringsData: { value: number; title: string; href: string }[];
  // -------------------------End Info Area Rings-------------------------

  // -------------------------Module Numbers-------------------------
  moduleNumber: string[] = ['Module 4', 'Module 5', 'Module 6', 'Module 7'];
  // -------------------------End of Module Numbers-------------------------

  // -------------------------Attendace Table Data-------------------------
  attendanceData: AttendanceData[] = [
    {
      participantId: 1,
      name: 'Sarah Adams',
      attendancePercentage: '100%',
      modulesCompleted: 8,
    },
    {
      participantId: 2,
      name: 'John Baker',
      attendancePercentage: '75%',
      modulesCompleted: 6,
    },
    {
      participantId: 3,
      name: 'Olivia Green',
      attendancePercentage: '50%',
      modulesCompleted: 4,
    },
    {
      participantId: 4,
      name: 'Emily Carter',
      attendancePercentage: '20%',
      modulesCompleted: 2,
    },
    {
      participantId: 5,
      name: 'Michael Davis',
      attendancePercentage: '100%',
      modulesCompleted: 8,
    },
    {
      participantId: 6,
      name: 'Jessica Evans',
      attendancePercentage: '75%',
      modulesCompleted: 6,
    },
    {
      participantId: 7,
      name: 'David Foster',
      attendancePercentage: '50%',
      modulesCompleted: 4,
    },
    {
      participantId: 8,
      name: 'Rachel Jackson',
      attendancePercentage: '20%',
      modulesCompleted: 2,
    },
    {
      participantId: 9,
      name: 'Benjamin Harris',
      attendancePercentage: '100%',
      modulesCompleted: 8,
    },
    {
      participantId: 10,
      name: 'Daniel King',
      attendancePercentage: '75%',
      modulesCompleted: 6,
    },
    {
      participantId: 11,
      name: 'Matthew Mitchell',
      attendancePercentage: '50%',
      modulesCompleted: 4,
    },
    {
      participantId: 12,
      name: 'Laura Lopez',
      attendancePercentage: '20%',
      modulesCompleted: 2,
    },
    {
      participantId: 13,
      name: 'Jennifer Nelson',
      attendancePercentage: '100%',
      modulesCompleted: 8,
    },
    {
      participantId: 14,
      name: 'William Parker',
      attendancePercentage: '75%',
      modulesCompleted: 6,
    },
    {
      participantId: 15,
      name: 'Victoria Ramirez',
      attendancePercentage: '50%',
      modulesCompleted: 4,
    },
    {
      participantId: 16,
      name: 'Victoria Ramirez',
      attendancePercentage: '20%',
      modulesCompleted: 2,
    },
    {
      participantId: 17,
      name: 'Kimberly Rodriguez',
      attendancePercentage: '20%',
      modulesCompleted: 2,
    },
    {
      participantId: 18,
      name: 'Amanda Scott',
      attendancePercentage: '20%',
      modulesCompleted: 2,
    },
    {
      participantId: 19,
      name: 'Jonathan Turner',
      attendancePercentage: '20%',
      modulesCompleted: 2,
    },
    {
      participantId: 20,
      name: 'James Wilson',
      attendancePercentage: '20%',
      modulesCompleted: 2,
    },
  ];
  // -------------------------End of Attendace Table Data-------------------------

  // -------------------------Data Table Variables-------------------------
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  // -------------------------End of Data Table Variables-------------------------

  constructor(
    private routeParameterRetrieval: ActivatedRoute,
    private courseCardData: CourseCardDataService,
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
      const id = value.get('id');
      console.log(
        'Get the Router Parameter Value (id to be retrieved) --->   ',
        id
      );

      // -------------------------Required Course-------------------------
      this.requiredCourse = this.courseCardData.getOngoingCourses()[id - 1];
      console.log('Required Course  ---> ', this.requiredCourse);
      this.starArray = this.courseCardData.getStars(this.requiredCourse.rating);
    });

    // -------------------------Info Area Rings Data-------------------------
    this.ringsData = [
      {
        value: this.requiredCourse.feedbackReceived,
        title: 'New Feedback',
        href: 'feedback',
      },
      {
        value: this.requiredCourse.participants,
        title: 'Participants',
        href: 'participant-attendance',
      },
    ];
    // -------------------------End of Info Area Rings Data-------------------------
    // --------------------------------------------------End of Required Data Retrival--------------------------------------------------

    // -------------------------Data Table Options-------------------------
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
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

// -------------------------Blueprint for Attendance Data-------------------------
interface AttendanceData {
  participantId?: number;
  name: string;
  attendancePercentage: string;
  modulesCompleted: number;
}
