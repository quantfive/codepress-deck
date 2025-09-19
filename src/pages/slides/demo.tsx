import DashboardApp from "@/slides/components/demo/DashboardApp";
import KanbanApp from "@/slides/components/demo/KanbanApp";
import EmbeddedCodepressEditor from "@/slides/components/EmbeddedCodepressEditor";
import Slide from "@/slides/components/Slide";
import SlideHeader from "@/slides/components/SlideHeader";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
const DynamicLandingPage = dynamic(
  () => import("@/slides/components/web/LandingPage"),
  { ssr: false }
);

type TabKey = "landing" | "dashboard" | "kanban";

const CODEPRESS_EDITOR_API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.codepress.dev/v1"
    : "http://localhost:8007/v1";

export default function Demo() {
  const [activeTab, setActiveTab] = useState<TabKey>("landing");

  // Dashboard data is handled inside DashboardApp
  const tabs: { key: TabKey; label: string }[] = useMemo(
    () => [
      { key: "landing", label: "Landing" },
      { key: "dashboard", label: "Dashboard" },
      { key: "kanban", label: "Kanban" },
    ],
    []
  );

  return (
    <Slide
      mainClassName="mx-auto"
      sectionClassName="content-start gap-6 p-6 sm:p-8"
    >
      <SlideHeader
        title={"Demo: See for yourself"}
        description={
          <span className="block text-[#555] max-w-[900px]">
            Go edit anything in the demo site below. Drag & drop elements,
            change colors, maybe mark your name and say Hi! The site below is a
            landing page, but our app also works with any webapp.
          </span>
        }
      />

      {/* Tabs */}
      {/* <nav
        role="tablist"
        aria-label="Demo tabs"
        className="flex w-full max-w-[1200px] border-b overflow-x-auto"
        codepress-ignore="true"
      >
        {tabs.map((t) => {
          const selected = activeTab === t.key;
          return (
            <button
              codepress-ignore="true"
              key={t.key}
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${t.key}`}
              id={`tab-${t.key}`}
              onClick={() => setActiveTab(t.key)}
              className={
                "px-4 sm:px-6 py-3 -mb-px border-b-2 text-sm sm:text-base whitespace-nowrap cursor-pointer " +
                (selected
                  ? "border-blue-600 text-blue-700 font-medium"
                  : "border-transparent text-[#666] hover:text-[#333]")
              }
            >
              {t.label}
            </button>
          );
        })}
      </nav> */}

      {/* Panels */}
      <div className="w-full grid gap-6">
        <EmbeddedCodepressEditor
          apiBaseUrl={CODEPRESS_EDITOR_API_BASE_URL}
          autoOpen
        />
        {/* Landing */}
        <section
          role="tabpanel"
          id="panel-landing"
          aria-labelledby="tab-landing"
          hidden={activeTab !== "landing"}
          className="grid gap-8"
        >
          <DynamicLandingPage />
        </section>

        {/* Dashboard */}
        <section
          role="tabpanel"
          id="panel-dashboard"
          aria-labelledby="tab-dashboard"
          hidden={activeTab !== "dashboard"}
          className="grid gap-6"
        >
          <DashboardApp />
        </section>

        {/* Kanban */}
        <section
          role="tabpanel"
          id="panel-kanban"
          aria-labelledby="tab-kanban"
          hidden={activeTab !== "kanban"}
          className="grid gap-6"
        >
          <KanbanApp />
        </section>
      </div>
    </Slide>
  );
}
