export const calculateTimeUntilChristmas = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const christmas = new Date(currentYear, 11, 25);

  if (now > christmas) {
    christmas.setFullYear(currentYear + 1);
  }

  const timeDiff = christmas.getTime() - now.getTime();

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export const getAgeFromYear = (year: number | string) => {
  if (typeof year === 'string') year = parseInt(year);
  if (!year) return '';
  const now = new Date();
  const currentYear = now.getFullYear();
  return (currentYear - year + 1).toString();
};
