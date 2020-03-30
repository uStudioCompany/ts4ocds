export const withDisplayNames = (styledComponents: StyledComponents): StyledComponents => {
  return Object.keys(styledComponents).reduce(
    (newStyledComponents, name) =>
      Object.assign(newStyledComponents, {
        [name]: { ...styledComponents[name], displayName: name },
      }),
    {}
  );
};

type StyledComponents = Record<string, { displayName?: string }>;
