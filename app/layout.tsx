import Navigation from './ui/nav-bar'
import './ui/global.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className="h-full">
          <Navigation />
          <main>
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
              <div className="min-h-full">
                {children}
              </div>
            </div>
          </main>
      </body>
    </html>
  )}
