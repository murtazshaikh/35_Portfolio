import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            
          } else {
            document.documentElement.classList.remove('dark')
          }
          `}
        </Script>
        <Main />
        <NextScript />

        <script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js" defer></script>
        <script src="https://mediafiles.botpress.cloud/a17611d1-1d89-4897-a759-d85ed90d3a43/webchat/v2.1/config.js" defer></script>

        {/* <script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/a17611d1-1d89-4897-a759-d85ed90d3a43/webchat/v2.1/config.js"></script> */}
      </body>
    </Html>
  );
}
