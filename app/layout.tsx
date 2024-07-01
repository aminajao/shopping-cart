import Header from "components/Header";
import Providers from "components/Providers";
import "styles/globals.css";
import Navbar from '../components/Navbar/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <Navbar />
          <div className="pb-20 pt-28">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
