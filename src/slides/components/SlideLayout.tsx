import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";
import { slideRoutes } from "../slideRoutes";

type Direction = "forward" | "backward" | null;

export default function SlideLayout({ children }: PropsWithChildren) {
  const router = useRouter();
  const [direction, setDirection] = useState<Direction>(null);
  const lastPathRef = useRef<string | null>(null);

  const currentIndex = useMemo(() => {
    const path = router.asPath.split("?")[0];
    return slideRoutes.indexOf(path as any);
  }, [router.asPath]);

  const prevHref = currentIndex > 0 ? slideRoutes[currentIndex - 1] : null;
  const nextHref =
    currentIndex >= 0 && currentIndex < slideRoutes.length - 1
      ? slideRoutes[currentIndex + 1]
      : null;

  // Determine direction on route change for animation
  useEffect(() => {
    const handleChangeStart = (url: string) => {
      const fromIndex = slideRoutes.indexOf(
        (lastPathRef.current ?? router.asPath).split("?")[0] as any
      );
      const toIndex = slideRoutes.indexOf(url.split("?")[0] as any);
      if (fromIndex >= 0 && toIndex >= 0) {
        setDirection(
          toIndex > fromIndex
            ? "forward"
            : toIndex < fromIndex
            ? "backward"
            : null
        );
      } else {
        setDirection(null);
      }
    };
    const handleChangeComplete = (url: string) => {
      lastPathRef.current = url;
    };
    router.events.on("routeChangeStart", handleChangeStart);
    router.events.on("routeChangeComplete", handleChangeComplete);
    return () => {
      router.events.off("routeChangeStart", handleChangeStart);
      router.events.off("routeChangeComplete", handleChangeComplete);
    };
  }, [router.events, router.asPath]);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && nextHref) {
        e.preventDefault();
        setDirection("forward");
        router.push(nextHref);
      } else if (e.key === "ArrowLeft" && prevHref) {
        e.preventDefault();
        setDirection("backward");
        router.push(prevHref);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [prevHref, nextHref, router]);

  const animationClass =
    direction === "forward"
      ? "animate-slide-in-right"
      : direction === "backward"
      ? "animate-slide-in-left"
      : "animate-fade-in";

  return (
    <div className="relative min-h-screen">
      <div className={`transition-all ${animationClass}`}>{children}</div>

      {/* Prev arrow */}
      {prevHref && (
        <Link
          aria-label="Previous slide"
          href={prevHref}
          onClick={() => setDirection("backward")}
          className="group absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 backdrop-blur cursor-pointer select-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </Link>
      )}

      {/* Next arrow */}
      {nextHref && (
        <Link
          aria-label="Next slide"
          href={nextHref}
          onClick={() => setDirection("forward")}
          className="group absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 backdrop-blur cursor-pointer select-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Link>
      )}
    </div>
  );
}
