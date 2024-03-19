import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {
  AdminDataService,
  CourseData,
  InstructorData,
  ParticipantData,
} from '../../../Services/admin-data.service';
import { NavigationService } from '../../../Services/navigation.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
})
export class AdminHomeComponent implements OnInit, AfterViewInit, OnDestroy {
  // -------------------------Login Session-------------------------
  username: string;
  // -------------------------End of Login Session-------------------------

  // -------------------------Retrieve Required Data-------------------------
  courseList: CourseData[];
  getStarsArray: Function;
  instructorList: InstructorData[];
  participantList: ParticipantData[];
  // -------------------------End of Retrieve Required Data-------------------------

  // -------------------------Info Area Rings-------------------------
  ringsData: { value: number; title: string; href: string }[];
  // -------------------------End of Info Area Rings-------------------------

  // -------------------------Data Table Variables-------------------------
  dtOptions: DataTables.Settings = {};
  dtOptionsParticipant: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  // -------------------------End of Data Table Variables-------------------------

  constructor(
    private adminData: AdminDataService,
    private navigation: NavigationService
  ) {}

  ngOnInit(): void {
    // -------------------------Login Session-------------------------
    if (typeof localStorage !== 'undefined') {
      this.username = localStorage.getItem('email')?.split('@')[0] as string;
      // console.log('Username  ---> ', this.username);
    }
    // -------------------------End of Login Session-------------------------

    // --------------------------------------------------Required Data Retrival--------------------------------------------------
    // -------------------------Course List-------------------------
    this.courseList = this.adminData.getCourseData();
    // console.log('Course List  ---> ', this.courseList);

    // -------------------------Instructor List-------------------------
    this.instructorList = this.adminData.getInstructorData();
    // console.log('Instructor List  ---> ', this.instructorList);

    // -------------------------Participant List-------------------------
    this.participantList = this.adminData.getParticipantData();
    // console.log('Participant List  ---> ', this.participantList);

    // -------------------------Stars Array-------------------------
    this.getStarsArray = this.adminData.getStars;

    // -------------------------Info Area Ring Data-------------------------
    this.ringsData = [
      { value: this.courseList.length, title: 'Courses', href: 'courses-list' },
      {
        value: this.instructorList.length,
        title: 'Instructors',
        href: 'instructors-list',
      },
      {
        value: this.participantList.length * this.courseList.length,
        title: 'Participants',
        href: 'participants-list',
      },
    ];
    // -------------------------End of Info Area Ring Data-------------------------
    // --------------------------------------------------End of Required Data Retrival--------------------------------------------------

    // -------------------------Data Table Options-------------------------
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      dom: 'Bfrtip',
    };
    this.dtOptionsParticipant = {
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
    this.dtTrigger.unsubscribe();
  }
}
