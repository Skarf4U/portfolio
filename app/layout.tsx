import '../styles/globals.css';
import '../styles/projects.css';
import '../styles/about.css';
import '../styles/contact.css';
import '../styles/skills.css';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/showcase.css';

export const metadata = {
  title: 'Adi Amar',
  description: 'Portfolio of Adi Amar',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
} 