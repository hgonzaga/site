export const name = 'Hugo Gonzaga';
export const location = 'Lisbon, Portugal';
export const jobTitle = 'Fullstack Developer';
export const interestsList = ['TypeScript', 'React', 'Next.js'];
export const companyName = 'Volkswagen Group Digital Solutions';
export const companyWebsite = 'https://vwg-digitalsolutions.pt/';

export const techStack = [
  'Java (21)',
  'JavaScript (ES6+)',
  'TypeScript',
  'Spring Boot',
  'Node.js',
  'React',
  'Angular2+',
  'Microservices',
  'RESTful',
  'OpenAPI',
  'Event-driven',
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
