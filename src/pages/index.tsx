import { slideRoutes } from "@/slides/slideRoutes";
import Link from "next/link";

function humanizeRoute(route: string): string {
  const lastSegment = route.split("/").filter(Boolean).pop() ?? "";
  return lastSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1 className="text-xl font-bold">Slides</h1>
      <ol className="list-decimal list-inside">
        {slideRoutes.map((route) => (
          <li key={route}>
            <Link href={route}>{humanizeRoute(route)}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
