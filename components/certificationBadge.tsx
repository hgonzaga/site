import { CertificationMetadata } from './certificationMetadata';
import { ArrowIcon, FreeCodeCampIcon } from './icons';

export default function CertificationBadge(props: CertificationMetadata) {
  return (
    <div
      className={`grid grid-cols-1 bg-neutral-100 dark:bg-neutral-800 rounded-md px-4 py-1 font-condensed ${
        !props.conclusionDate ? 'blur-sm' : ''
      }`}
      key={props.courseName}
    >
      <div className="flex flex-row justify-between mb-2">
        <a
          className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all no-underline text-sm"
          rel="noopener noreferrer"
          target="_blank"
          href={props.orgUrl}
        >
          {props.org}
        </a>
        <FreeCodeCampIcon />
      </div>
      <div>
        <b>{props.courseName}</b>
        <p className="text-sm">{props.conclusionDate}</p>
      </div>
      <div className="flex flex-row justify-between mt-2 text-neutral-500 dark:text-neutral-400 m-0">
        <a
          className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all no-underline text-sm"
          rel="noopener noreferrer"
          target="_blank"
          href={props.courseCertificate}
        >
          <ArrowIcon />
          <p className="h-7">show certificate</p>
        </a>
        <a
          className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all no-underline text-sm"
          rel="noopener noreferrer"
          target="_blank"
          href={props.sourceCodeUrl}
        >
          <ArrowIcon />
          <p className="h-7">view sources</p>
        </a>
      </div>
    </div>
  );
}
