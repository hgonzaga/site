import type { Metadata } from 'next';
import {
  techStack,
  certifications,
  companyName,
  companyWebsite,
} from '@/lib/info';
import CertificationBadge from '@/components/certificationBadge';
import moment from 'moment';

export const metadata: Metadata = {
  title: 'About',
  description: 'Who is Hugo and what is he doing out there?',
};

export default function AboutPage() {
  const techStackBadges = techStack.map((teck) => (
    <div
      className="bg-neutral-100 dark:bg-neutral-800 font-condensed rounded-md py-1 px-2 mb-2 mr-2"
      key={teck}
    >
      {teck}
    </div>
  ));

  const certificationBadges = certifications
    .sort((a, b) => moment(b.conclusionDate).diff(moment(a.conclusionDate)))
    .map((certification) => (
      <CertificationBadge key={certification.courseName} {...certification} />
    ));

  return (
    <section className="max-w-xl">
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200 mt-5">
        <p>
          Hey there, from a galaxy not too far away! I'm a software engineer
          extraordinaire hailing from the sunny streets of Lisbon, Portugal. As
          a proud child of the 90s (aka the raddest generation ever), I've seen
          it all - from the excitement of playing 16-bit pixelated video games
          on bulky CRT monitor to the era of streaming everything. I've grown up
          witnessing the leaps and bounds of the digital age, and let me tell
          you, it's been a wild ride!
        </p>
        <p>
          Nowadays, you can find me slinging code and creating magic behind the
          scenes at &nbsp;
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={companyWebsite}
            className="no-underline hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            {companyName}
          </a>
          , where I'm on a mission to bring balance to the Force in the IT world
          (one line of code at a time). Armed with my MSc in Telecommunications
          and Computer Engineering and wielding my trusty lightsaber-like
          keyboard, I'm not just a coding Wookiee, I'm also a certified taco
          aficionado. When I'm not buried in lines of code, battling bugs and
          glitches, you might catch me indulging in my guilty pleasure -
          devouring tacos with gusto! Call me Taco-wan Kenobi!
        </p>

        <div className="my-5 ">
          <p>
            Here is the technology stack that I have been working with recently:
          </p>
          <div className="flex flex-auto flex-wrap">{techStackBadges}</div>
        </div>

        {/*         <div className="flex flex-col gap-2 md:flex-row md:gap-2 mt-8 select-none">
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
        </div> */}

        <hr />
      </div>

      <div className="mt-8">
        <p>Latest activities on learning path:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 row-span-2 mt-8">
          {certificationBadges}
        </div>
      </div>
    </section>
  );
}
