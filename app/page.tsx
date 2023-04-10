import { ArrowIcon } from '@/components/icons';
import { company, jobTitle, name, role } from '@/lib/info';

const Home = () => {
  return (
    <section className="text-neutral-800 dark:text-white">
      <h1 className="font-condensed text-3xl">
        Hey! I'm <span className="text-orange-600">{name}</span>
      </h1>
      <h1 className="font-condensed text-2xl text-neutral-500 dark:text-neutral-400">
        {role}
      </h1>

      <div className="my-5 max-w-lg dark:text-neutral-200">
        <p>
          Yep, I'm a {jobTitle}, crafting APIs like a droid optimizing
          hyperdrive calculations. Currently using my geeky skills at{' '}
          <b>{company()}</b>, bringing the Force to the web. May the code be
          clean as I battle the bugs like a skilled starfighter!
        </p>
        <p className="font-condensed mt-2 text-neutral-500 dark:text-neutral-400">
          #MayTheCodeBeWithYou #BackendDevWars
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
            <p className="h-7">get in touch on LinkedIn</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Home;
