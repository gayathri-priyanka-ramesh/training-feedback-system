import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseCardDataService {
  // --------------------------------------------------Enrolled Course Data--------------------------------------------------
  getEnrolledCourses(): EnrolledCourse[] {
    return [
      {
        id: 1,
        route: '/participant/enrolledCourse',
        imgSrc: '../../assets/img/WebFundamentals.jpg',
        courseName: 'Web Fundamentals',
        instructorName: 'Jonathan',
        progress: 90,
      },
      {
        id: 2,
        route: '/participant/enrolledCourse',
        imgSrc: '../../assets/img/Git.jpg',
        courseName: 'Git Version Control',
        instructorName: 'Maria',
        progress: 85,
      },
      {
        id: 3,
        route: '/participant/enrolledCourse',
        imgSrc: '../../assets/img/HTML.png',
        courseName: 'HTML Essentials',
        instructorName: 'Laura Davis',
        progress: 75,
      },
      {
        id: 4,
        route: '/participant/enrolledCourse',
        imgSrc: '../../assets/img/CSS.png',
        courseName: 'CSS for Web Design',
        instructorName: 'David Clark',
        progress: 60,
      },
      {
        id: 5,
        route: '/participant/enrolledCourse',
        imgSrc: '../../assets/img/Bootstrap.jpg',
        courseName: 'CSS with Bootstrap',
        instructorName: 'Emily',
        progress: 50,
      },
      {
        id: 6,
        route: '/participant/enrolledCourse',
        imgSrc: '../../assets/img/Sass.png',
        courseName: 'CSS with Sass',
        instructorName: 'Samuel Evans',
        progress: 60,
      },
      {
        id: 7,
        route: '/participant/enrolledCourse',
        imgSrc: '../../assets/img/AnimationsCSS.jpg',
        instructorName: 'Sarah Foster',
        courseName: 'CSS Animations',
        progress: 55,
      },
    ];
  }
  // --------------------------------------------------End of Enrolled Course Data--------------------------------------------------

  // --------------------------------------------------Applied Course Data--------------------------------------------------
  getAppliedCourses(): AppliedTrendingCourse[] {
    return [
      {
        id: 1,
        route: '/participant/appliedCourse',
        imgSrc: '../../assets/img/ResponsiveWebDesign.jpg',
        courseName: 'Responsive Web Design',
        instructorName: 'Garcia',
        startDate: '01/03/2024',
        rating: 5,
      },
      {
        id: 2,
        route: '/participant/appliedCourse',
        imgSrc: '../../assets/img/JavaScript.jpg',
        courseName: 'JavaScript Fundamentals',
        instructorName: 'Rachel Green',
        startDate: '10/03/2024',
        rating: 4,
      },
      {
        id: 3,
        route: '/participant/appliedCourse',
        imgSrc: '../../assets/img/AnimationsJS.jpg',
        courseName: 'JavaScript Animations',
        instructorName: 'James Harris',
        startDate: '01/04/2024',
        rating: 4,
      },
      {
        id: 4,
        route: '/participant/appliedCourse',
        imgSrc: '../../assets/img/FrontEndFrameworks.jpg',
        courseName: 'Front-End Frameworks',
        instructorName: 'Johnson',
        startDate: '15/04/2024',
        rating: 5,
      },
    ];
  }
  // --------------------------------------------------End of Applied Course Data--------------------------------------------------

  // --------------------------------------------------Trending Course Data--------------------------------------------------
  getTrendingCourses(): AppliedTrendingCourse[] {
    return [
      {
        id: 1,
        route: '/participant/trendingCourse',
        imgSrc: '../../assets/img/Angular.jpg',
        courseName: 'Angular Fundamentals',
        instructorName: 'Matthew',
        startDate: '01/04/2024',
        rating: 4,
      },
      {
        id: 2,
        route: '/participant/trendingCourse',
        imgSrc: '../../assets/img/React.jpg',
        courseName: 'React.js Fundamentals',
        instructorName: 'Kevin King',
        startDate: '01/03/2024',
        rating: 5,
      },
      {
        id: 3,
        route: '/participant/trendingCourse',
        imgSrc: '../../assets/img/Vue.jpg',
        courseName: 'Vue.js Essentials',
        instructorName: 'Lisa Martinez',
        startDate: '15/03/2024',
        rating: 5,
      },
      {
        id: 4,
        route: '/participant/trendingCourse',
        imgSrc: '../../assets/img/Node.jpg',
        courseName: 'Node.js Basics',
        instructorName: 'Olivia Nelson',
        startDate: '15/04/2024',
        rating: 4,
      },
      {
        id: 5,
        route: '/participant/trendingCourse',
        imgSrc: '../../assets/img/TestingDebugging.png',
        courseName: 'Testing and Debugging',
        instructorName: 'Jennifer',
        startDate: '15/04/2024',
        rating: 4,
      },
    ];
  }
  // --------------------------------------------------End Trending Course Data--------------------------------------------------

  // --------------------------------------------------Ongoing Course Data--------------------------------------------------
  getOngoingCourses(): OngoingCourse[] {
    return [
      {
        id: 1,
        route: '/instructor/ongoingCourse',
        imgSrc: '../../assets/img/WebFundamentals.jpg',
        courseName: 'Web Fundamentals',
        participants: 50,
        feedbackReceived: 40,
        progress: 85,
        rating: 5,
      },
      {
        id: 2,
        route: '/instructor/ongoingCourse',
        imgSrc: '../../assets/img/Git.jpg',
        courseName: 'Git Version Control',
        participants: 40,
        feedbackReceived: 45,
        progress: 90,
        rating: 4,
      },
      {
        id: 3,
        route: '/instructor/ongoingCourse',
        imgSrc: '../../assets/img/HTML.png',
        courseName: 'HTML Essentials',
        participants: 45,
        feedbackReceived: 42,
        progress: 75,
        rating: 4,
      },
      {
        id: 4,
        route: '/instructor/ongoingCourse',
        imgSrc: '../../assets/img/CSS.png',
        courseName: 'CSS for Web Design',
        participants: 35,
        feedbackReceived: 38,
        progress: 70,
        rating: 5,
      },
      {
        id: 5,
        route: '/instructor/ongoingCourse',
        imgSrc: '../../assets/img/Bootstrap.jpg',
        courseName: 'CSS with Bootstrap',
        participants: 45,
        feedbackReceived: 35,
        progress: 65,
        rating: 4,
      },
      {
        id: 6,
        route: '/instructor/ongoingCourse',
        imgSrc: '../../assets/img/Sass.png',
        courseName: 'CSS with Sass',
        participants: 42,
        feedbackReceived: 30,
        progress: 60,
        rating: 5,
      },
      {
        id: 7,
        route: '/instructor/ongoingCourse',
        imgSrc: '../../assets/img/AnimationsCSS.jpg',
        courseName: 'CSS Animations',
        participants: 45,
        feedbackReceived: 28,
        progress: 55,
        rating: 4,
      },
    ];
  }
  // --------------------------------------------------End of Ongoing Course Data--------------------------------------------------

  // --------------------------------------------------Upcoming Course Data--------------------------------------------------
  getUpcomingCourses(): UpcomingCourse[] {
    return [
      {
        id: 1,
        route: '/instructor/upcomingCourse',
        imgSrc: '../../assets/img/ResponsiveWebDesign.jpg',
        courseName: 'Responsive Web Design',
        instructorName: 'Garcia',
        startDate: '01/03/2024',
        participantCount: 40,
        status: '10 Seats Vacant',
        applicantCount: 15,
      },
      {
        id: 2,
        route: '/instructor/upcomingCourse',
        imgSrc: '../../assets/img/JavaScript.jpg',
        courseName: 'JavaScript Fundamentals',
        instructorName: 'Rachel Green',
        startDate: '10/03/2024',
        participantCount: 50,
        status: 'Seats Filled',
        applicantCount: 5,
      },
      {
        id: 3,
        route: '/instructor/upcomingCourse',
        imgSrc: '../../assets/img/AnimationsJS.jpg',
        courseName: 'JavaScript Animations',
        instructorName: 'James Harris',
        startDate: '01/04/2024',
        participantCount: 25,
        status: '25 Seats Vacant',
        applicantCount: 25,
      },
      {
        id: 4,
        route: '/instructor/upcomingCourse',
        imgSrc: '../../assets/img/FrontEndFrameworks.jpg',
        courseName: 'Front-End Frameworks',
        instructorName: 'Johnson',
        startDate: '01/03/2024',
        participantCount: 50,
        status: 'Seats Filled',
        applicantCount: 20,
      },
      {
        id: 5,
        route: '/instructor/upcomingCourse',
        imgSrc: '../../assets/img/Angular.jpg',
        instructorName: 'Matthew Miller',
        courseName: 'Angular Fundamentals',
        startDate: '01/04/2024',
        participantCount: 30,
        status: '20 Seats Vacant',
        applicantCount: 13,
      },
      {
        id: 6,
        route: '/instructor/upcomingCourse',
        imgSrc: '../../assets/img/React.jpg',
        courseName: 'React.js Fundamentals',
        instructorName: 'Kevin King',
        startDate: '15/03/2024',
        participantCount: 35,
        status: '15 Seats Vacant',
        applicantCount: 5,
      },
    ];
  }
  // --------------------------------------------------End of Upcoming Course Data--------------------------------------------------

  // -------------------------Stars as per Rating-------------------------
  getStars(rating: number): number[] {
    let starCntArray = Array.from({ length: rating }, (_, index) => index);
    return starCntArray;
  }
  // -------------------------End of Stars as per Rating-------------------------

  constructor() {}
}

// --------------------------------------------------Interfaces--------------------------------------------------
// -------------------------Blueprint of Enrolled Course Card-------------------------
export interface EnrolledCourse {
  id: number;
  route: string;
  imgSrc: string;
  courseName: string;
  instructorName: string;
  progress: number;
}

// -------------------------Blueprint of Trending Course Card-------------------------
export interface AppliedTrendingCourse {
  id: number;
  route: string;
  imgSrc: string;
  courseName: string;
  instructorName: string;
  startDate: string;
  rating: number;
}

// -------------------------Blueprint of Ongoing Course Card-------------------------
export interface OngoingCourse {
  id: number;
  route: string;
  imgSrc: string;
  courseName: string;
  participants: number;
  feedbackReceived: number;
  progress: number;
  rating: number;
}

// -------------------------Blueprint of Upcoming Course Card-------------------------
export interface UpcomingCourse {
  id: number;
  route: string;
  imgSrc: string;
  courseName: string;
  instructorName: string;
  startDate: string;
  participantCount: number;
  status: string;
  applicantCount: number;
}
// --------------------------------------------------End of Interfaces--------------------------------------------------
