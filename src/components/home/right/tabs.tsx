import Link from 'next/link';

export const Tabs = () => {
  return (
    <div className="text-center text-sm">
      <ul className="-mb-px flex flex-wrap text-2xl font-bold text-black">
        <li className="mr-2">
          <Link
            href="/"
            className="inline-block rounded-t-lg border-b-2 border-transparent p-1 px-4 text-black hover:border-black"
          >
            Feed
          </Link>
        </li>
        <li className="mr-2">
          <Link
            href="/"
            className="inline-block rounded-t-lg border-b-2 border-black p-1 px-4 text-black hover:border-black"
            aria-current="page"
          >
            Routine
          </Link>
        </li>
        <li className="mr-2">
          <Link
            href="/"
            className="inline-block rounded-t-lg border-b-2 border-transparent p-1 text-black hover:border-black "
          >
            SkinCare Shelf
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
