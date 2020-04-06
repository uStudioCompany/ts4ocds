export const createUrl = (...parts: string[]): string => {
  return parts.reduce(
    (url, part) =>
      `${url}/${part
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
        .toLowerCase()
        .slice(1)}`,
    ``
  );
};
