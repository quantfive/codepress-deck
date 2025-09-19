declare module "class-variance-authority" {
  export function cva<
    T extends Record<string, unknown> | undefined = undefined
  >(
    base?: string,
    config?: {
      variants?: Record<string, Record<string, string>>;
      defaultVariants?: Record<string, string>;
    }
  ): (
    options?: T extends undefined ? any : Partial<T> & { className?: string }
  ) => string;
}
