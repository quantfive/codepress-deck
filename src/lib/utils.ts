// Minimal cn util to avoid external deps
export type ClassValue =
  | string
  | number
  | null
  | undefined
  | ClassDictionary
  | ClassArray;

type ClassDictionary = Record<
  string,
  boolean | string | number | null | undefined
>;
type ClassArray = Array<ClassValue>;

export function cn(...inputs: ClassValue[]) {
  const classes: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string") classes.push(input);
    else if (Array.isArray(input))
      classes.push(...(input.filter(Boolean) as string[]));
    else if (typeof input === "object") {
      for (const [key, val] of Object.entries(input)) {
        if (val) classes.push(key);
      }
    }
  }
  return classes.join(" ").trim();
}
