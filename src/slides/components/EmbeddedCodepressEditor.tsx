import { CodePressEditor } from "@quantfive/codepress-browser-extension";

type EmbeddedCodepressEditorProps = {
  apiBaseUrl: string;
  autoOpen?: boolean;
  useShadow?: boolean;
};

export default function EmbeddedCodepressEditor({
  apiBaseUrl,
  autoOpen = false,
  useShadow = false,
}: EmbeddedCodepressEditorProps) {
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(
        "codepress-editing-mode",
        JSON.stringify(Boolean(autoOpen))
      );
    } catch {
      // Ignore storage failures (e.g., SSR, private mode)
    }
  }

  return (
    <CodePressEditor
      useShadow={useShadow}
      apiBaseUrl={apiBaseUrl}
      autoSaveToCurrentBranch
    />
  );
}
