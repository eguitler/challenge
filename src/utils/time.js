export const durationMinToHours = (min) => {
  const hours = Math.floor(min / 60);
  const minutes = min - (60 * hours);

  if (hours === 0) return `${min} min`;
  if (minutes === 0) return `${hours} hr`;

  return `${hours} hs ${minutes} mins`;
};
