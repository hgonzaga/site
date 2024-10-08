import { ArrowIcon } from '@/components/icons';
import { companyName, companyWebsite } from '@/lib/info';

const AnimatedName = () => {
  return (
    <h1 className="font-medium pt-12 transition-element">
      <span className="sr-only">Hugo Gonzaga</span>
      <span aria-hidden="true" className="block overflow-hidden group relative">
        <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full">
          {'Hugo Gonzaga'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
        <span className="inline-block absolute left-0 top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0 text-orange-600">
          {'@hgonzaga'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </span>
    </h1>
  );
};

const Home = () => {
  return (
    <>
      <AnimatedName />
      <section className="text-neutral-800 dark:text-white">
        <div className="my-5 max-w-lg dark:text-neutral-200">
          <p>Hey! Yup, another one building things for the web.</p>
          <p>
            Currently scribbling away on a couple of APIs weaving my fullstack
            magic for&nbsp;
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={companyWebsite}
              className="no-underline text-orange-600  hover:text-orange-700 dark:hover:text-orange-500"
            >
              {companyName}
            </a>
            .
          </p>
        </div>

        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
          <li>
            <a
              className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/hgonzaga"
            >
              <ArrowIcon />
              <p className="h-7">follow me on github</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/hugonzaga/"
            >
              <ArrowIcon />
              <p className="h-7">get in touch on linkedIn</p>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
