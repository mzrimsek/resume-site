app.controller('MainController', ['$scope', function($scope) {
  $scope.about = {
    name: 'Michael Zrimsek',
    title: 'Software Engineer',
    img: 'img/profile_pic.jpg',
    desc: 'I am a ' + (new Date().getFullYear() - 1993) + ' year old Software Engineer.  I am extremely passioniate about my work and am always striving to find something new and exciting to work on.  Currently I am infatuated with the potential that the web has to offer as a development platform - I love keeping up on all the new technologies that are always comings out and trying to apply them to small projects, time permitting.  I am still working my way through school, but have an expected graduation of Spring 2017.  School takes up a considerable amount of my time, but I work on honing my skills in my free time.  I enjoy the feeling of setting out to learn something new and the pride that follows the successful application of something brand new.',
    location: 'Aurora, OH',
    email: 'mikezrimsek@gmail.com',
    website: 'http://zrimsek.com'
  };
  $scope.networks = {
    github: 'https://github.com/mzrimsek',
    linkedin: 'https://www.linkedin.com/in/mzrimsek',
    google_plus: 'https://plus.google.com/+MikeZrimsek'
  };
  $scope.jobs = [
    new Job('Verys', 'CA', 'Junior Web Software Engineer', 'January 2014', 'Present', 'http://verys.com', 'Verys - a boutique, custom software development company specializing in web and mobile applications - was recently recognized as one of the fastest growing companies in Orange County, CA.  I worked on several projects, but have presented the most notable ones below.', [
      new Project('TheRoadmap', 'A financial planner website originally built on a LAMP stack, but then rewritten in Java.  The application utilized the Spring framework using Thymeleaf as the templating engine, built with Gradle, running on a Tomcat server.  My duties on this project consisted of porting the codebase from PHP to Java, development and testing of new and existing features, server maintenance, and codebase upkeep.'),
      new Project('Parcel Pending', 'An electronic locker system used in apartment complex for easy, centralized package delivery.  My duties on this project revolved around doing extensive testing of both the website and the API developed for accessing information about the lockers.  Formulated thorough test cases to aid in regression testing that was required during each project sprint.')
    ])
  ];
  $scope.skills = {
    info: 'My goal is to constantly be learning something as there is always something new and exciting to try out in a project.  Below are the skills I have learned and honed through projects I have worked on.',
    languages: [
      new Skill('Java', 95),
      new Skill('C/C++', 55),
      new Skill('C#', 60),
      new Skill('Javascript/JQuery', 90),
      new Skill('HTML5/CSS3', 90),
      new Skill('MySQL', 60),
      new Skill('Python', 50)
    ],
    frameworks: [
      new Skill('Spring', 75),
      new Skill('Django', 45),
      new Skill('Node.js', 30),
      new Skill('AngularJS', 50)
    ]
  };
  $scope.schools = [
    new School('Kent State University', 'OH', 'Computer Science', 'September 2015', 'Present'),
    new School('Irvine Valley College', 'CA', 'Computer Science', 'September 2012', 'May 2015'),
    new School('Cal Poly Pomona', 'CA', 'Computer Science', 'September 2011', 'May 2012')
  ];
}]);

function Job(company, location, title, startDate, endDate, url, desc, projects) {
  this.company = company;
  this.location = location;
  this.title = title;
  this.startDate = startDate;
  this.endDate = endDate;
  this.url = url;
  this.desc = desc;
  this.projects = projects;
}

function Project(name, desc) {
  this.name = name;
  this.desc = desc;
}

function Skill(name, perc) {
  var setLevel = function(perc) {
    if (perc <= 30) return 'Beginner';
    else if (perc <= 60) return 'Intermediate';
    else if (perc <= 80) return 'Experienced';
    else return 'Adept';
  };
  this.name = name;
  this.perc = perc;
  this.level = setLevel(perc);
}

function School(name, location, major, startDate, endDate) {
  this.name = name;
  this.location = location;
  this.major = major;
  this.startDate = startDate;
  this.endDate = endDate;
}
