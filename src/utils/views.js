export const viewsToCompactFormat = (views) => {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  const number = formatter.format(views);
  return `${number} views`;
};
