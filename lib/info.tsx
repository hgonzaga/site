export const name = 'Hugo Gonzaga';
export const role = 'Software Engineer';
export const location = 'Lisbon, Portugal';
export const jobTitle = 'Backend Developer';
export const interestsList = ['TypeScript', 'React', 'Next.js'];
export const companyName = 'Colt Technology Services';
export const companyWebsite = 'https://www.colt.net/';

export const bio = () => {
  return (
    <>
      Hey! I'm Hugo. Yup, I'm another one building things for the web. Currently
      scribbling on a couple of APIs mainly as a <b>{jobTitle}</b> for{' '}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={companyWebsite}
        className="no-underline "
      >
        <b>{companyName}</b>
      </a>
      .
    </>
  );
};

export const about = () => {
  return (
    <>
      Currently scribbling on a couple of APIs primarily as a Backend Developer
      for Colt Technology Services.
    </>
  );
};

export const techStack = () => {
  const stackList = [
    'Java 17',
    'JavaScript (ES6+)',
    'Spring Boot',
    'Node.js',
    'RESTful',
    'OpenApi',
    'Microservices',
    'RabbitMQ',
    'MongoDB',
    'OracleDB',
    'Docker',
    'Kubernetes',
  ];

  return stackList.map((teck) => (
    <div
      className="bg-neutral-100 dark:bg-neutral-800 rounded-md py-1 px-2 mb-2"
      key={teck}
    >
      {teck}
    </div>
  ));
};

export const professionalExperience = () => {
  const experience = [
    {
      companyName: 'Colt Technology Services',
      startDate: 'Jan 2021',
      endDate: 'Currently',
      roles: ['gerg5rh', 'jgeirhjert'],
    },
    {
      companyName: 'Opensoft',
      startDate: 'Oct 2019',
      endDate: 'Dec 2020',
      roles: ['gerg5rh', 'jgeirhjert'],
    },
  ];

  return experience.map((exp) => <div>34</div>);
};
