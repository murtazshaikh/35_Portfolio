import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { AnimatePresence } from "motion/react";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

// Botpress webchat. botId/clientId are stable across webchat versions; the
// dashboard's config URL is dated per publish, so it is deliberately not
// referenced here - it would break on the next republish.
const BOTPRESS_BOT_ID = "a17611d1-1d89-4897-a759-d85ed90d3a43";
const BOTPRESS_CLIENT_ID = "fa4c5b11-875a-43c0-98d7-21c2903efef1";

// Name, avatar and colour carried over from the v2.1 config so the bot keeps
// its identity. The old theme.json could not be reused - it was a map of
// v2.1's internal generated class names, which v3 does not understand.
const BOTPRESS_BOT_NAME = "Candy";
const BOTPRESS_COLOR = "#2F6EE5";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initital-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>

      <Script
        src="https://cdn.botpress.cloud/webchat/v3.7/inject.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.botpress?.init({
            botId: BOTPRESS_BOT_ID,
            clientId: BOTPRESS_CLIENT_ID,
            configuration: {
              botName: BOTPRESS_BOT_NAME,
              // Absolute URL: a relative path would break if the widget ever
              // renders inside an iframe, where it would resolve against
              // Botpress's origin instead of this site's.
              botAvatar: `${window.location.origin}/botpress-avatar.webp`,
              color: BOTPRESS_COLOR,
              showPoweredBy: true,
            },
          });
        }}
      />
    </>
  );
}
