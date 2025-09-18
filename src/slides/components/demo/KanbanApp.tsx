import { useState, type ReactNode } from "react";

type ColumnId = "backlog" | "in-progress" | "review" | "done";
type Task = { id: string; title: string; assignee: string };
type BoardState = Record<ColumnId, Task[]>;
type DragInfo = { fromColumnId: ColumnId; fromIndex: number } | null;

export default function KanbanApp() {
  const [board, setBoard] = useState<BoardState>(() => ({
    backlog: [
      { id: "BL-101", title: "Collect user interviews", assignee: "Alex" },
      { id: "BL-102", title: "Define success metrics", assignee: "Mia" },
      { id: "BL-103", title: "Audit existing pages", assignee: "Sam" },
    ],
    "in-progress": [
      { id: "IP-201", title: "Implement auth flow", assignee: "Jordan" },
      { id: "IP-202", title: "Marketing hero rewrite", assignee: "Taylor" },
    ],
    review: [
      { id: "RV-301", title: "Dashboard metrics QA", assignee: "Chris" },
    ],
    done: [
      { id: "DN-401", title: "Landing layout v1", assignee: "Riley" },
      { id: "DN-402", title: "Icon set refresh", assignee: "Kai" },
    ],
  }));
  const [dragInfo, setDragInfo] = useState<DragInfo>(null);
  const [overTarget, setOverTarget] = useState<{
    columnId: ColumnId;
    index: number | null;
  } | null>(null);

  const handleDragStart = (
    fromColumnId: ColumnId,
    fromIndex: number,
    e: React.DragEvent<HTMLLIElement>
  ) => {
    setDragInfo({ fromColumnId, fromIndex });
    e.dataTransfer.effectAllowed = "move";
    e.currentTarget.setAttribute("aria-grabbed", "true");
  };

  const handleDragOverList = (
    columnId: ColumnId,
    e: React.DragEvent<HTMLUListElement>
  ) => {
    e.preventDefault();
    // Compute nearest insertion index relative to child cards
    const ul = e.currentTarget as HTMLUListElement;
    const children = Array.from(ul.children) as HTMLElement[];
    let computedIndex = 0;
    for (const child of children) {
      if (child.getAttribute("data-preview") === "true") {
        continue; // ignore existing preview element
      }
      const rect = child.getBoundingClientRect();
      const midY = rect.top + rect.height / 2;
      if (e.clientY < midY) {
        const idxAttr = child.getAttribute("data-index");
        if (idxAttr) {
          computedIndex = parseInt(idxAttr, 10);
        }
        break;
      }
      const idxAttr = child.getAttribute("data-index");
      if (idxAttr) {
        computedIndex = parseInt(idxAttr, 10) + 1;
      }
    }
    setOverTarget({ columnId, index: computedIndex });
    e.dataTransfer.dropEffect = "move";
  };

  const handleDragOverCard = (
    columnId: ColumnId,
    index: number,
    e: React.DragEvent<HTMLLIElement>
  ) => {
    e.preventDefault();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const isAfter = e.clientY - rect.top > rect.height / 2;
    const targetIndex = index + (isAfter ? 1 : 0);
    setOverTarget({ columnId, index: targetIndex });
    e.dataTransfer.dropEffect = "move";
  };

  const performDrop = (toColumnId: ColumnId, maybeIndex: number | null) => {
    if (!dragInfo) return;
    const { fromColumnId, fromIndex } = dragInfo;
    const targetIndexRaw = maybeIndex ?? board[toColumnId].length;

    setBoard((prev) => {
      const next: BoardState = {
        backlog: [...prev["backlog"]],
        "in-progress": [...prev["in-progress"]],
        review: [...prev["review"]],
        done: [...prev["done"]],
      };

      const sourceList = next[fromColumnId];
      if (fromIndex < 0 || fromIndex >= sourceList.length) return prev;
      const [moved] = sourceList.splice(fromIndex, 1);

      let targetIndex = targetIndexRaw;
      if (fromColumnId === toColumnId && targetIndex > fromIndex) {
        targetIndex = targetIndex - 1;
      }
      const list = next[toColumnId];
      const safeIndex = Math.max(0, Math.min(list.length, targetIndex));
      list.splice(safeIndex, 0, moved);
      return next;
    });

    setDragInfo(null);
    setOverTarget(null);
  };

  const handleDropOnList = (
    columnId: ColumnId,
    e: React.DragEvent<HTMLUListElement>
  ) => {
    e.preventDefault();
    performDrop(
      columnId,
      overTarget?.columnId === columnId
        ? overTarget.index
        : board[columnId].length
    );
  };

  const handleDropOnCard = (
    columnId: ColumnId,
    index: number,
    e: React.DragEvent<HTMLLIElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const targetIndex =
      overTarget?.columnId === columnId && overTarget.index != null
        ? overTarget.index
        : index;
    performDrop(columnId, targetIndex);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
    e.currentTarget.removeAttribute("aria-grabbed");
    setDragInfo(null);
    setOverTarget(null);
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {(
        [
          ["backlog", "Backlog"],
          ["in-progress", "In Progress"],
          ["review", "Review"],
          ["done", "Done"],
        ] as [ColumnId, string][]
      )?.map(([colId, title]) => (
        <KanbanColumn
          key={colId}
          title={title}
          columnId={colId}
          listProps={{
            onDragOver: (e) => handleDragOverList(colId, e),
            onDrop: (e) => handleDropOnList(colId, e),
          }}
        >
          {(() => {
            const children: ReactNode[] = [];
            const draggedTask = dragInfo
              ? board[dragInfo.fromColumnId][dragInfo.fromIndex]
              : null;
            const list = board[colId];
            for (let idx = 0; idx < list.length; idx++) {
              if (overTarget?.columnId === colId && overTarget.index === idx) {
                children.push(
                  <DragPreviewCard
                    key={`preview-${colId}-${idx}`}
                    task={draggedTask}
                  />
                );
              }
              const task = list[idx];
              children.push(
                <KanbanCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  assignee={task.assignee}
                  draggable
                  onDragStart={(e) => handleDragStart(colId, idx, e)}
                  onDragOver={(e) => handleDragOverCard(colId, idx, e)}
                  onDrop={(e) => handleDropOnCard(colId, idx, e)}
                  onDragEnd={handleDragEnd}
                  data-index={idx}
                />
              );
            }
            if (
              overTarget?.columnId === colId &&
              overTarget.index === list.length
            ) {
              children.push(
                <DragPreviewCard
                  key={`preview-${colId}-end`}
                  task={draggedTask}
                />
              );
            }
            return children;
          })()}
        </KanbanColumn>
      ))}
    </div>
  );
}

function KanbanColumn({
  title,
  columnId,
  listProps,
  children,
}: {
  title: string;
  columnId: string;
  listProps?: React.ComponentProps<"ul">;
  children: React.ReactNode;
}) {
  return (
    <section
      className="rounded-xl border bg-white overflow-hidden grid"
      aria-labelledby={`kanban-${columnId}-title`}
      data-kanban-column={columnId}
    >
      <div
        id={`kanban-${columnId}-title`}
        className="px-4 py-3 border-b font-medium bg-black/5"
      >
        {title}
      </div>
      <ul className="p-3 grid gap-2 min-h-[120px]" role="list" {...listProps}>
        {children}
      </ul>
    </section>
  );
}

function DragPreviewCard({ task }: { task: Task | null }) {
  return (
    <li
      className="rounded-lg border-2 border-dashed border-blue-400/70 bg-blue-50/40 p-3 grid gap-1"
      data-preview="true"
    >
      <div className="text-sm font-medium text-blue-700">
        {task ? task.title : "Drop here"}
      </div>
      {task && (
        <div className="text-xs text-blue-700/80 flex items-center justify-between">
          <span>Assignee: {task.assignee}</span>
          <span className="text-blue-700/70">#{task.id}</span>
        </div>
      )}
    </li>
  );
}

function KanbanCard({
  id,
  title,
  assignee,
  draggable,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
  ...rest
}: {
  id: string;
  title: string;
  assignee: string;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLLIElement>) => void;
  onDragEnd?: (e: React.DragEvent<HTMLLIElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLLIElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLLIElement>) => void;
} & Omit<React.ComponentProps<"li">, "children">) {
  return (
    <li
      className="rounded-lg border p-3 bg-white grid gap-1"
      data-task-id={id}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
      {...rest}
    >
      <div className="text-sm font-medium">{title}</div>
      <div className="text-xs text-[#666] flex items-center justify-between">
        <span>Assignee: {assignee}</span>
        <span className="text-[#999]">#{id}</span>
      </div>
    </li>
  );
}
