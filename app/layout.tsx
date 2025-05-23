import { ReactNode } from 'react';
import type { NextPage } from 'next';
import '@/assets/styles/global.css';
import { inter } from '@/fonts';
import { cn } from '@/utils';
import { ReactQueryProvider, StoreProvider } from '@/configs';

type TRootLayout = Readonly<{
  children: ReactNode;
}>;

const RootLayout: NextPage<TRootLayout> = ({ children }) => (
  <html lang="en">
    <body className={cn('antialiased', inter.variable)}>
      <ReactQueryProvider>
        <StoreProvider>{children}</StoreProvider>
      </ReactQueryProvider>
    </body>
  </html>
);

export default RootLayout;
