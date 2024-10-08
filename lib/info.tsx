export const name = 'Hugo Gonzaga';
export const location = 'Lisbon, Portugal';
export const jobTitle = 'Fullstack Developer';
export const interestsList = ['TypeScript', 'React', 'Next.js'];
export const companyName = 'Colt Technology Services';
export const companyWebsite = 'https://www.colt.net/';

export const techStack = [
  'Java (17)',
  'JavaScript (ES6+)',
  'Spring Boot',
  'Node.js',
  'Microservices',
  'RESTful',
  'OpenAPI Specification',
  'RabbitMQ',
  'Oracle Database',
  'MongoDB',
  'Docker',
  'Kubernetes',
];

export const certifications = [
  {
    org: 'freeCodeCamp',
    orgUrl: 'https://www.freecodecamp.org/',
    courseName: 'JavaScript Algorithms and Data Structures',
    courseCertificate:
      'https://www.freecodecamp.org/certification/hgonzaga/javascript-algorithms-and-data-structures',
    conclusionDate: '2022-01-18',
    sourceCodeUrl:
      'https://github.com/hgonzaga/freecodecamp-js-algorithms-data-structures',
  },
  {
    org: 'udemy',
    orgUrl: 'https://www.udemy.com',
    courseName: 'Angular - The Complete Guide',
    courseCertificate:
      'https://www.udemy.com/course/the-complete-guide-to-angular-2',
    conclusionDate: '',
    sourceCodeUrl:
      'https://github.com/hgonzaga/freecodecamp-js-algorithms-data-structures',
  },
];

export const company = () => (
  <a
    rel="noopener noreferrer"
    target="_blank"
    href={companyWebsite}
    className="no-underline "
  >
    {companyName}
  </a>
);
