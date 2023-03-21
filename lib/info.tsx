export const bioTitle = 'Hugo Gonzaga';
export const bioSubtitle = 'Software Engineer';
export const location = 'Lisbon, Portugal';
export const jobTitle = 'Backend Developer';
export const companyName = 'Colt Technology Services';
export const companyWebsite = 'https://www.colt.net/';
export const bio = () => {
  return (
    <>
      Hey, I'm Hugo. A passionate Software Engineer who relentlessly seeks
      knowledge and growth on a daily basis. Currently scribbling on a couple of
      APIs mainly as a <b>{jobTitle}</b> for{' '}
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
