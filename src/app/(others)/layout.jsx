import localFont from 'next/font/local';
import '.././globals.css';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import Loader from '@/components/Loader';
// import SessionWrapper from '@/components/SessionWrapper';
// import CommentModal from '@/components/CommentModal';

const geistSans = localFont({
  src: '.././fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '.././fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Nilexia Media',
  description: 'Best Media Outlet to get information',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      {/* <SessionWrapper> */}
        <html lang='en'>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <ClerkLoading>
              <Loader />
            </ClerkLoading>
            <ClerkLoaded>
              <div className='flex justify-between max-w-6xl mx-auto'>
                <div className='hidden sm:inline border-r h-screen sticky top-0'>
                  <LeftSidebar />
                </div>

                <div className='w-2xl flex-1'>{children}</div>
                <div className='lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]'>
                  <RightSidebar />
                </div>
              </div>
              {/* <CommentModal /> */}
            </ClerkLoaded>
          </body>
        </html>
      {/* </SessionWrapper> */}
    </ClerkProvider>
  );
}