app.controller('ResumeController', ['$scope', function ($scope) {
  $scope.about = {
    name: 'Michael Zrimsek',
    title: 'Full Stack Software Developer',
    img: 'img/profile_pic.jpg',
    desc: 'I am a ' + calcAge("1993/07/22") + ' year old Software Developer who has been coding for about ' + (new Date().getFullYear() - 2009) + ' years. I currently spend a lot of my time focused on web technologies and their potential to make wide ranging impact on a variety of devices. There are few things more fulfilling than identifying a problem and then successfully architecting a solution and implementing it.',
    location: 'Streetsboro, OH',
    email: 'mikezrimsek@gmail.com',
    website: 'https://zrimsek.com'
  };
  $scope.networks = {
    github: 'https://github.com/mzrimsek',
    linkedin: 'https://www.linkedin.com/in/mzrimsek',
    medium: 'https://medium.com/@mikezrimsek'
  };
  $scope.jobs = [
    new Job('RoviSys', 'OH', 'Software Developer', 'June 2018', null, 'https://www.rovisys.com/', 'RoviSys is a leading system integrator and custom software solutions company with a presence around the globe.', [
      new Project('RUNNER', 'A CEO iniative to streamline the collection and distribution of company news in multiple mediums. It utilizes an Angular front-end and .NET Core back-end to gather input from management. Input is then reviewed and distributed to the enterprise in two core ways - as a bi-monthly email generated from approved submissions, and as a news feed displayed on TVs in offices around the world.'),
      new Project('Various Client Applications', 'Primarily focused on streamlining client systems to improve their ability to monitor data collection devices at sites all around the country. Many of these projects utilized a combination of Angular, .NET API, .NET MVC, and Node.js as their core technologies.')
    ]),
    new Job('Progressive Insurance', 'OH', 'Associate Applications Developer', 'July 2017', 'May 2018', 'https://www.progressive.com/', 'Progressive is one of the largest auto insurance providers in the United States, serving millions of customers.', [
      new Project('CHAI 2', 'An initiative to consume an API that utilized machine learning to deflect chat sessions where applicable. Based on the question a user asked, we used an AI trained with intents to deliver precanned responses if it would likely answer their question. Since this has been live nearly 50% of eligible chat sessions have been deferred.')
    ]),
    new Job('Kent State University Residence Services', 'OH', 'Software Developer', 'December 2015', 'May 2017', 'https://www.kent.edu/housing', 'As a division of the Residence Services Department, one of the main goals was to build software that would not only help students living on campus, but to also those who manage the day to day operation of the buildings.', [
      new Project('Check In/Check Out', 'An application built on the .NET MVC framework to replace the existing process of checking students in and out of dorms at the start and finish of each semester. In addition to this project, there was also an accompanying Android application. My duties on this project varied from new feature implementation on both web and Android, to designing new sections of the database, to writing sections of our front-end application to utilize React. While working on this project there was a strong push toward more reusable and maintainable coding practices, including an emphasis on Test Driven Development. Throughout development, refactoring of any of the codebase currently being touched was highly encouraged.')
    ]),
    new Job('Verys', 'CA', 'Junior Web Software Developer', 'January 2014', 'November 2015', 'https://verys.com', 'Verys - a boutique, custom software development company specializing in web and mobile applications - was recognized as one of the fastest growing companies in Orange County, CA.  I worked on several projects, but have presented the most notable ones below.', [
      new Project('TheRoadmap', 'A financial planner website originally built on a LAMP stack, but then rewritten in Java.  The application utilized the Spring framework using Thymeleaf as the templating engine, built with Gradle, running on a Tomcat server.  My duties on this project consisted of porting the codebase from PHP to Java, development and testing of new and existing features, server maintenance, and codebase upkeep.'),
      new Project('Parcel Pending', 'An electronic locker system used in apartment complex for easy, centralized package delivery.  My duties on this project revolved around doing extensive testing of both the website and the API developed for accessing information about the lockers.  Formulated thorough test cases to aid in regression testing that was required during each project sprint.')
    ])
  ];
  $scope.skills = {
    info: 'Below are some of the technologies I have utilized.',
    languages: [
      new Language(new Skill('C#', 95), [
        new Skill('.NET API', 90),
        new Skill('.NET MVC', 85),
        new Skill('Entity Framework', 85)
      ]),
      new Language(new Skill('JavaScript/TypeScript', 95), [
        new Skill('Angular', 85),
        new Skill('Redux', 80),
        new Skill('React', 85),
        new Skill('Node.js', 75)
      ]),
      new Language(new Skill('Java', 90), [
        new Skill('Spring MVC', 70)
      ]),
      new Language(new Skill('HTML5/CSS3', 85), []),
      new Language(new Skill('Docker', 80), [
        new Skill('Docker Compose', 75)
      ]),
      new Language(new Skill('SQL', 65), []),
    ]
  };
  $scope.schools = [
    new School('Kent State University', 'OH', 'Computer Science', 'September 2015', 'May 2017'),
    new School('Irvine Valley College', 'CA', 'Computer Science', 'September 2012', 'May 2015'),
    new School('Cal Poly Pomona', 'CA', 'Computer Science', 'September 2011', 'May 2012')
  ];
}]);

var calcAge = function (dateString) {
  var birthDate = new Date(dateString);
  var ageDif = Date.now() - birthDate.getTime();
  var ageDate = new Date(ageDif);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

function Job(company, location, title, startDate, endDate, url, desc, projects) {
  this.company = company;
  this.location = location;
  this.title = title;
  this.startDate = startDate;
  this.endDate = endDate || 'Present';
  this.url = url;
  this.desc = desc;
  this.projects = projects;
}

function Project(name, desc) {
  this.name = name;
  this.desc = desc;
}

function Language(primary, subskills) {
  this.primary = primary;
  this.subskills = subskills;
}

function Skill(name, perc) {
  var setLevel = function (perc) {
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
  this.endDate = endDate || 'Present';
}
