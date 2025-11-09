import Navigation from "./ui/nav-bar"

export default function Page({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>

    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {children}
    </div>
    </>
  );
}
