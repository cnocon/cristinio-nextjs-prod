import Breadcrumbs from '../ui/breadcrumbs';
import PageHeading from '../ui/page-heading'
// import { PaperClipIcon } from '@heroicons/react/20/solid';

export default function Page() {
  return (
    <>
      <Breadcrumbs breadcrumbs={[
        {
          name: 'About',
          href: '/about',
          current: true
        }
      ]}/>
      <PageHeading title="About Me" />
      <div className="sm:my-4 md:my-8 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800/50 dark:shadow-none dark:inset-ring dark:inset-ring-white/10">
        <div className="px-4 py-6 sm:px-6">
          <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">My Information</h3>
          <p className="mt-1 max-w-2xl text-sm/6 text-gray-500 dark:text-gray-300">Personal Details</p>
        </div>
        <div className="border-t border-gray-100 dark:border-white/5">
          <dl className="divide-y divide-gray-100 dark:divide-white/5">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">Full name</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">Cristin O'Connor</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">Professional role</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">Frontend Developer</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">Email address</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
                <a href="mailto:her@cristin.io">her@cristin.io</a>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">Location</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">West Haven, UT</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">About</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
                I am a front-end developer who loves turning complex ideas into intuitive, accessible interfaces. I thrive at the intersection of design and development, helping teams communicate clearly through code.
              </dd>
            </div>
            {/* Attachments section with resumes */}
            {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">Attachments</dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0 dark:text-gray-100">
                <ul
                  role="list"
                  className="divide-y divide-gray-100 rounded-md border border-gray-200 dark:divide-white/5 dark:border-white/10"
                >
                  <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400 dark:text-gray-500" />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium text-gray-900 dark:text-gray-100">
                          resume_back_end_developer.pdf
                        </span>
                        <span className="shrink-0 text-gray-400 dark:text-gray-500">2.4mb</span>
                      </div>
                    </div>
                    <div className="ml-4 shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400 dark:text-gray-500" />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium text-gray-900 dark:text-gray-100">
                          coverletter_back_end_developer.pdf
                        </span>
                        <span className="shrink-0 text-gray-400 dark:text-gray-500">4.5mb</span>
                      </div>
                    </div>
                    <div className="ml-4 shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div> */}
          </dl>
        </div>
      </div>
    </>
  )
}
