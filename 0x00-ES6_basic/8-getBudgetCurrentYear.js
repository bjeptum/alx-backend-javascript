export default function getBudgetForCurrentYear(income, gdp, capita) {
  const currentYear = new Date().getFullYear();

  const budget = {
    [`income-${currentYear}`]: income,
    [`gdp-${currentYear}`]: gdp,
    [`capita-${currentYear}`]: capita,
  };

  return budget;
}
