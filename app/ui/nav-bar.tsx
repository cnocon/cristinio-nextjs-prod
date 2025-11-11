import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavItem from './nav-item';
import { oswald, lato } from './fonts';

export default function Navigation() {
  return (
    <Disclosure
      as="nav"
      className={`${oswald.className} relative bg-white shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-600 focus:outline-hidden focus:ring-inset dark:hover:bg-white/5 dark:hover:text-white dark:focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="cristin.io Site Logo"
                src="/logo-white.svg?color=indigo&shade=600"
                className="h-8 w-auto dark:hidden"
              />
              <img
                alt="cristin.io Site Logo"
                src="/logo-white.svg?color=indigo&shade=500"
                className="h-8 w-auto not-dark:hidden"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavItem screen="lg" path="/" name="Home" />
              <NavItem path="/about" name="About" screen="lg" />
              <NavItem path="/resume" name="Resumé" screen="lg" />
              <NavItem path="/portfolio" name="Portfolio" screen="lg" />
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pt-2 pb-4">
          <NavItem screen="sm" path="/" name="Home" />
          <NavItem screen="sm" path="/about" name="About" />
          <NavItem screen="sm" path="/resume" name="Resumé" />
          <NavItem screen="sm" path="/portfolio" name="Portfolio" />
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
