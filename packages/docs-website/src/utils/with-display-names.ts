export const withDisplayNames = <StyledComponents extends Record<string, { displayName?: string }>>(
  styledComponents: StyledComponents
): StyledComponents => {
  return Object.keys(styledComponents).reduce(
    (newStyledComponents, name) =>
      Object.assign(newStyledComponents, {
        [name]: { ...styledComponents[name], displayName: name },
      }),
    {}
  ) as StyledComponents;
};
