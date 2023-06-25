export const getAcronym = (str: string): string => {
  const matches = str.match(/\b(\w)/g);
  return (matches || []).join('');
};
