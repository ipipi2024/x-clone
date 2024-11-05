import '.././globals.css';

import Loader from '@/components/Loader';
import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'Nilexia Media',
  description: 'Best Media Outlet to get information',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className='flex justify-center items-center p-3'>
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>{children}</ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}