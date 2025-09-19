declare module "@quantfive/codepress-engine/swc" {
  // Minimal typing to satisfy TS; treat exported value as any
  const createSWCPlugin: any;
  export default createSWCPlugin;
}
