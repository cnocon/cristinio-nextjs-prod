'use client';

import { DisclosureButton } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavItem({
  name = 'Home',
  path = '/',
  screen = 'sm'
}: {
  name: string,
  path: string,
  screen: 'lg' | 'sm'
}) {
    const pathname = usePathname();

    return screen === 'lg' ? (
      <Link
        href={path}
        className={`inline-flex items-center border-b-2 border-indigo-600 px-1 pt-1 text-sm font-medium text-gray-900 dark:border-indigo-500 dark:text-white ${pathname === path ? "border-indigo-600 dark:border-indigo-500 text-gray-900 dark:text-white" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-white/20 dark:hover:text-white"}`}
      >
        {name}
      </Link>
    ) : (
      <DisclosureButton
        as={Link}
        href={path}
        className={`block border-l-4 border-indigo-600 bg-indigo-50 py-2 pr-4 pl-3  text-base font-medium text-indigo-700 dark:border-indigo-500 dark:bg-indigo-600/10 dark:text-indigo-400 ${pathname === path ? "bg-indigo-50 dark:bg-indigo-600/10 border-indigo-600 text-indigo-700 dark:border-indigo-500 dark:bg-indigo-600/10 dark:text-indigo-400" : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"}`}
      >
        {name}
      </DisclosureButton>
    )
  }
