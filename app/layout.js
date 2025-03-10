export const metadata = {
    title: 'Onur Şuvalçınkaya - Portfolio',
    description: 'Software Engineer, DJ, Writer, and Minimalist based in Amsterdam',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }