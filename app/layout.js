export const metadata = {
  title: 'My Website',
  description: 'A Next.js application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
} 