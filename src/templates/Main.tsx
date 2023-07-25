import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { DiscordIcon } from '@/icons/discord';
import { EmailIcon } from '@/icons/email';
import { FacebookIcon } from '@/icons/facebook';
import { NotificationIcon } from '@/icons/notification';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Jakarta = Plus_Jakarta_Sans({
  subsets: [],
});

const Main = (props: IMainProps) => (
  <div className={`w-full text-black antialiased ${Jakarta.className}`}>
    {props.meta}
    <div className="w-full">
      <header className="border-b border-gray-300">
        <nav className="border-gray-200">
          <div className="mx-6 flex flex-wrap items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="self-center whitespace-nowrap text-2xl font-semibold text-black">
                Breakout
              </span>
            </Link>
            <div className="flex md:order-2">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="mr-1 rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 md:hidden"
              >
                <NotificationIcon />
                <span className="sr-only">Search</span>
              </button>
              <div className="hidden hover:cursor-pointer md:block">
                <div className="pointer-events-none inset-y-0 left-0 flex items-center">
                  <NotificationIcon width={44} height={44} />
                  <div className="ml-2 flex h-[50px] items-center gap-2 rounded-full bg-indigo-300 p-3 pl-[0.3rem]">
                    <img
                      src="/assets/images/user.png"
                      alt="user"
                      width={44}
                      height={44}
                    />
                    <span>Jocelyn Culhane</span>
                  </div>
                </div>
              </div>
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
              id="navbar-search"
            >
              <div className="relative mt-3 md:hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
              <ul className="mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0">
                <li>
                  <Link
                    href="/"
                    className="block rounded bg-blue-700 py-2 pl-3 pr-4 md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="content py-5 pb-[10rem] text-xl">{props.children}</main>

      <footer className="block bg-indigo-300 py-8 text-sm md:text-center">
        <div className="items-center justify-between text-black md:mx-16 md:flex">
          <div className="text-2xl font-bold">Breakout</div>
          <div className="flex gap-3">
            <DiscordIcon /> Discord
            <FacebookIcon /> Facebook
            <EmailIcon /> Email
          </div>
          <div>Privacy Policy 2023. Breakout</div>
        </div>
      </footer>
    </div>
  </div>
);

export { Main };
