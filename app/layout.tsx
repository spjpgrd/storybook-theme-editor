import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Storybook Theme Editor',
  description: 'Create and customize Storybook themes with a visual editor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
