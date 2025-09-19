import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo } from "react";

import { defaultSlideMeta, resolveSlideMeta } from "../seoMeta";

const fallbackOrigin = "https://codepress.com";

function resolveOrigin() {
  const fromEnv = process.env.NEXT_PUBLIC_DECK_CANONICAL_ORIGIN;
  if (!fromEnv) return fallbackOrigin;
  return fromEnv.endsWith("/") ? fromEnv.slice(0, -1) : fromEnv;
}

export default function SlideSeo() {
  const router = useRouter();

  const { meta, canonicalPath } = useMemo(() => {
    const current = router.asPath ?? router.pathname ?? "";
    const path = current.split("?")[0];
    return {
      meta: resolveSlideMeta(path),
      canonicalPath: path,
    };
  }, [router.asPath, router.pathname]);

  const origin = resolveOrigin();
  const imagePath = meta.image ?? defaultSlideMeta.image;
  const imageUrl = imagePath?.startsWith("http")
    ? imagePath
    : imagePath
    ? `${origin}${imagePath}`
    : undefined;
  const canonicalUrl = canonicalPath
    ? `${origin}${canonicalPath}`
    : origin;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="CodePress" />
      {imageUrl ? (
        <meta property="og:image" content={imageUrl} />
      ) : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
