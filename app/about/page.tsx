import type { Metadata } from 'next';
import moment from 'moment';
import {
  GitHubIcon,
  ArrowIcon,
  TwitterIcon,
  LinkedInIcon,
} from '@/components/Icon';
import {
  role,
  companyName,
  companyWebsite,
  jobTitle,
  techStack,
  name,
} from '@/lib/info';

export const metadata: Metadata = {
  title: 'About',
  description: 'Who is Hugo and what is he doing out there?.',
};

const getYearsOfExpirience = () => {
  return moment([2018, 9])
    .fromNow(true)
    .replace(/\s/g, '')
    .replace('years', '+ years');
};

export default function AboutPage() {
  return (
    <section className="max-w-xl select-none">
      <h1 className="font-bold text-4xl font-serif">About Me</h1>

      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p className="my-5 text-justify">
          My name is {name}, I was born in Portugal, and I'm son of the 90's
          (probably the coolest generation ever!). I can state that I witnessed
          many of the biggest leaps in the evolution of the digital era, and
          that triggered from an early age the desire to be able to leave my
          mark in the IT world.
        </p>

        <p className="text-justify">
          I graduated in 2019 with an MSc degree in Telecommunications and
          Computer Engineering from ISCTE - University Institute of Lisbon, and
          I easily got the taste for programming and building for the web.
          Currently, I'm a passionate <b>{role}</b> with{' '}
          {getYearsOfExpirience()} of experience in software development, who
          relentlessly seeks knowledge and growth on a daily basis, and is
          working in the telecommunications sector for a world-class global
          voice and network provider called{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={companyWebsite}
            className="no-underline "
          >
            <b>{companyName}</b>
          </a>
          .
        </p>

        <div>
          <p className="text-justify">
            Here is the technology stack that I have been working with recently:
          </p>
          <div className="flex flex-auto flex-wrap justify-between">
            {techStack()}
          </div>
        </div>

        <hr />
        <p className="mb-8 text-justify">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/hgonzaga"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/hugonzaga/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkedInIcon />
              <div className="ml-3">LinkedIn</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.twitter.com/hugonzaga"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <TwitterIcon />
              <div className="ml-3">Twitter</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
