import { ContextProvider } from "../components/Client";
import Home from "../components/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <Header />
          <Home />
          <div className="container py-2">{children}</div>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
