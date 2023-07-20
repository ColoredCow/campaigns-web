export const getAcronym = (str: string): string => {
  const matches = str.match(/\b(\w)/g);
  return (matches || []).join('');
};

export const getMultiSelectOptions = (multiSelectedOption: any) => {
  return (
    multiSelectedOption.length &&
    multiSelectedOption.map(
      (selectedOption: { value: any }) => selectedOption.value
    )
  );
};
