import SlideLayout from "@/slides/components/SlideLayout";
import "@/styles/codepress.css";
import { fontVars } from "@/styles/fonts";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isSlidePage = router.pathname.startsWith("/slides/");
  const vars = fontVars;
  const content = <Component {...pageProps} />;
  return isSlidePage ? (
    <div className={`${vars} font-sans`}>
      <SlideLayout>{content}</SlideLayout>
    </div>
  ) : (
    <div className={`${vars} font-sans`}>{content}</div>
  );
}
