app.controller('ResumeController', ['$scope', function($scope) {
  $scope.about = {
    name: 'Michael Zrimsek',
    title: 'Software Engineer',
    img: 'img/profile_pic.jpg',
    desc: 'I am a ' + calcAge("1993/07/22") + ' year old Software Engineer who has been coding for about ' + (new Date().getFullYear() - 2009) + ' years, ever since I discovered how much I loved it during High School.  I am extremely passioniate about my work and am always striving to find something new and exciting to get my hands on.  Currently I am infatuated with the potential that the web has to offer as a development platform - I love keeping up on all the new technologies that are always comings out and trying to apply them to small projects, time permitting.  I am still working my way through school, but have an expected graduation of Spring 2017.  School takes up a considerable amount of my time, but I work on honing my skills in my free time.  I enjoy the feeling of setting out to learn something new and the pride that follows the successful application of it.',
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
    new Job('Kent State University Residence Services', 'OH', 'Web Software Engineer', 'December 2015', null, 'https://www.kent.edu/housing', 'As a division of the Residence Services Department, one of the main goals was to build software that would not only help students living on campus, but to also those who manage the day to day operation of the buildings.', [
      new Project('Check In/Check Out', 'An application built on the .NET MVC framework to replace the existing process of checking students in and out of dorms at the start and finish of each semester.  My duties on this project varied from new feature implmentation, to heavy code refactoring, to rewriting the front-end to utilize React.')
    ]),
    new Job('Verys', 'CA', 'Junior Web Software Engineer', 'January 2014', 'November 2015', 'http://verys.com', 'Verys - a boutique, custom software development company specializing in web and mobile applications - was recognized as one of the fastest growing companies in Orange County, CA.  I worked on several projects, but have presented the most notable ones below.', [
      new Project('TheRoadmap', 'A financial planner website originally built on a LAMP stack, but then rewritten in Java.  The application utilized the Spring framework using Thymeleaf as the templating engine, built with Gradle, running on a Tomcat server.  My duties on this project consisted of porting the codebase from PHP to Java, development and testing of new and existing features, server maintenance, and codebase upkeep.'),
      new Project('Parcel Pending', 'An electronic locker system used in apartment complex for easy, centralized package delivery.  My duties on this project revolved around doing extensive testing of both the website and the API developed for accessing information about the lockers.  Formulated thorough test cases to aid in regression testing that was required during each project sprint.')
    ])
  ];
  $scope.skills = {
    info: 'My goal is to constantly be learning something as there is always something new and exciting to try out in a project.  Below are the skills I have learned and honed through projects I have worked on both at work and in my spare time.',
    languages: [
      new Language(new Skill('Java', 95), [
        new Skill('Spring', 75)
      ]),
      new Language(new Skill('C/C++', 45), []),
      new Language(new Skill('C#', 70), [
          new Skill('.NET MVC', 60)
      ]),
      new Language(new Skill('HTML5/CSS3', 80), []),
      new Language(new Skill('Javascript/JQuery', 80), [
        new Skill('Node', 45),
        new Skill('Angular', 50),
        new Skill('React/Flux', 25)
      ]),
      new Language(new Skill('MySQL', 60), []),
      new Language(new Skill('Python', 50), [
        new Skill('Django', 30)
      ]),
      new Language(new Skill('PHP', 30), [])
    ]
  };
  $scope.schools = [
    new School('Kent State University', 'OH', 'Computer Science', 'September 2015', null),
    new School('Irvine Valley College', 'CA', 'Computer Science', 'September 2012', 'May 2015'),
    new School('Cal Poly Pomona', 'CA', 'Computer Science', 'September 2011', 'May 2012')
  ];
}]);

/**
 * Calculate current age based on current day of the year
 * @param  {String} dateString  String representation of date to calculate age in 'YYYY/MM/DD' format
 * @return {Integer}            Current age based on entered birthday and current day of the year
 */
var calcAge = function(dateString) {
  var birthDate = new Date(dateString);
  var ageDif = Date.now() - birthDate.getTime();
  var ageDate = new Date(ageDif);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
/**
 * Constructor for new Job object
 * @param {String} company   Name of company
 * @param {String} location  State where company is located
 * @param {String} title     Job title at company
 * @param {String} startDate Month, Year started at company
 * @param {String} endDate   Month, Year ended at company - set to 'Present' if null
 * @param {String} url       URL of company website
 * @param {String} desc      Description of what the company does
 * @param {Array} projects  Array of most important projects worked on while employed
 */
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
/**
 * Constructor for new Project Object
 * @param {String} name Name of project
 * @param {String} desc Description of what project is and parts worked on
 */
function Project(name, desc) {
  this.name = name;
  this.desc = desc;
}
/**
 * [Language description]
 * @param {Skill} primary   The parent skill - usually the main language of the subskills.
 * @param {Skill Array} subskills List of child skills - usually frameworks, libraries, etc.
 */
function Language(primary, subskills) {
  this.primary = primary;
  this.subskills = subskills;
}
/**
 * Constructor for new Skill object
 * @param {String} name Name of skill
 * @param {Integer} perc Number representation of knowledge with skill
 */
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
/**
 * Constructor for new School object
 * @param {String} name      Name of school
 * @param {String} location  State where school is located
 * @param {String} major     Major of studies at school
 * @param {String} startDate Month, Year started attending school
 * @param {String} endDate   Month, Year finished attending school - set to 'Present' if null
 */
function School(name, location, major, startDate, endDate) {
  this.name = name;
  this.location = location;
  this.major = major;
  this.startDate = startDate;
  this.endDate = endDate || 'Present';
}
