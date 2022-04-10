import v8 from "v8";

export const slice =
  (start?: number | undefined, end?: number | undefined) =>
  <T extends Array<U>, U>(arr: T) =>
    arr.slice(start, end);
