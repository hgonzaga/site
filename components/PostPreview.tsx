import Link from 'next/link';
import { PostMetadata } from './postMetadata';

export default function PostPreview(props: PostMetadata) {
  return (
    <Link href={`/blog/${props.slug}`}>
      <div key={props.slug}>
        <h2>{props.title}</h2>
        <p className="text-sm">{props.subtitle}</p>

        <p className="font-mono text-sm text-neutral-500">{props.date}</p>
      </div>
    </Link>
  );
}
