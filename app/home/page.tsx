export default function Page({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="sm:my-4 md:my-8 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800/50 dark:shadow-none dark:inset-ring dark:inset-ring-white/10">
        {children}
      </div>
    </>
  );
}
