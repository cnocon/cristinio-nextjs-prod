import Navigation from './ui/nav-bar'
import './ui/global.scss'
import Footer from './ui/footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-white dark:bg-gray-950 scheme-light dark:scheme-dark  h-full" lang="en">
      <body className="h-full">
          <header>
            <Navigation />
          </header>
          <main className="h-full">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
              <div className="min-h-full">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                  {children}
                </div>
              </div>
            </div>
          </main>
          <Footer />
      </body>
    </html>
  )
}
