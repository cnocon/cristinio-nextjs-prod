import Breadcrumbs from "./ui/breadcrumbs"

export default function Page({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs breadcrumbs={[{
        name: 'Home',
        href: '/',
        current: true
      }]} />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h3>Who I Am</h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-400">I’m Cristin O’Connor, a front-end developer who loves turning complex ideas into intuitive, accessible interfaces. I thrive at the intersection of design and development, helping teams communicate clearly through code.</p>
        <h3>What I Do</h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-400">Over the past five years, I’ve built web experiences for startups, nonprofits, and educational platforms. My background in both design systems and front-end frameworks allows me to translate creative concepts into scalable, maintainable codebases.</p>
        <h3>How to Learn More</h3>
        <p className="mt-1 text-sm/6 text-gray-500 dark:text-gray-400">I believe good design is invisible — it quietly guides users where they need to go. My work focuses on empathy and communication, ensuring every interface is both useful and human.</p>
      </div>
      {children}
    </div>
  );
}
