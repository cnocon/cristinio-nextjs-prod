import { Oswald, Lato } from 'next/font/google';

export const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700']
});

export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
})
