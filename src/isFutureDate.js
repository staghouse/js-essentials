module.exports = (time, comparison) => {
  let now = new Date();
  let compYear = now.getFullYear();
  let compMonth = now.getMonth() + 1; // Buffer the date as January is 0
  let compDate = now.getDate();

  if (comparison) {
    [compYear, compMonth, compDate] = comparison.split('-').map(c => Number(c));
  }

  const [year, month, date] = time.split('-').map(c => Number(c));

  // This/next year and next month or
  // This/next year and this/next month but not today
  return (
    year > compYear ||
    (year === compYear &&
      (month > compMonth || (month == compMonth && date > compDate)))
  );
};
