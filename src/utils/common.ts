export const getAcronym = (str: string): string => {
  const matches = str.match(/\b(\w)/g);
  return (matches || []).join('');
};

export const extractValuesFromOptions = (multiSelectedOption: object) => {
  return multiSelectedOption?.length
    ? multiSelectedOption.map(
        (selectedOption: { value: number }) => selectedOption.value
      )
    : [];
};

export const mapTagsToSelectOptions = (tags: object) => {
  return (
    tags?.length &&
    tags.map((tag: { id: number; name: string }) => ({
      value: tag.id,
      label: tag.name,
    }))
  );
};
