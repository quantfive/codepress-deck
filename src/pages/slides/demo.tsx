import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import DashboardApp from "@/slides/components/demo/DashboardApp";
import KanbanApp from "@/slides/components/demo/KanbanApp";
import LandingApp from "@/slides/components/demo/LandingApp";
import { CodepressEditor } from "@quantfive/codepress-browser-extension";
import { useMemo, useState } from "react";

type TabKey = "landing" | "dashboard" | "kanban";

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
    <main className="min-h-screen grid place-items-stretch max-w-[1300px] mx-auto">
      <section className="min-h-screen grid content-start gap-6 p-6 sm:p-8">
        <header className="grid gap-3">
          <H1 className="text-left">Demo: Multi‑App Playground</H1>
          <P className="text-left text-[#555] max-w-[900px]">
            Explore three app experiences inside one slide: a marketing landing
            page, a data dashboard, and a simple Kanban board. Content is
            placeholder for now and fully HTML for easy targeting.
          </P>
        </header>

        {/* Tabs */}
        <nav
          role="tablist"
          aria-label="Demo tabs"
          className="flex w-full max-w-[1200px] border-b overflow-x-auto"
        >
          {tabs.map((t) => {
            const selected = activeTab === t.key;
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${t.key}`}
                id={`tab-${t.key}`}
                onClick={() => setActiveTab(t.key)}
                className={
                  "px-4 sm:px-6 py-3 -mb-px border-b-2 text-sm sm:text-base whitespace-nowrap " +
                  (selected
                    ? "border-blue-600 text-blue-700 font-medium"
                    : "border-transparent text-[#666] hover:text-[#333]")
                }
              >
                {t.label}
              </button>
            );
          })}
        </nav>

        {/* Panels */}
        <div className="w-full max-w-[1200px] grid gap-6">
          <CodepressEditor useShadow={false} />
          {/* Landing */}
          <section
            role="tabpanel"
            id="panel-landing"
            aria-labelledby="tab-landing"
            hidden={activeTab !== "landing"}
            className="grid gap-8"
          >
            <LandingApp />
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
      </section>
    </main>
  );
}
