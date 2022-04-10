export const join =
  (separator?: string | undefined) =>
  <T extends Array<U>, U>(arr: T) =>
    arr.join(separator);
