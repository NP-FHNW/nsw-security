import Head from "next/head";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NSW Security</title>
        <meta
          name="description"
          content="Ihre Sicherheit interessiert uns mit Sicherheit"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-12 max-w-5xl mx-auto">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
