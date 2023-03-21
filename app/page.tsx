import { ArrowIcon } from '@/components/Icon';
import { bio, bioTitle, bioSubtitle, location } from '@/lib/info';

const Home = () => {
  return (
    <section className="text-neutral-800 dark:text-white select-none">
      <h1 className="font-bold text-4xl font-serif">{bioTitle}.</h1>
      <h1 className="font-bold text-4xl font-serif">{bioSubtitle}.</h1>
      <h3 className="font-bold text-sm font-serif text-neutral-500 dark:text-neutral-400">
        {location}
      </h3>

      <p className="my-5 max-w-lg dark:text-neutral-200 text-justify ">
        {bio()}
      </p>

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
