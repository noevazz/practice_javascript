function sortYears(years) {
  const checkYears = (year1, year2) => year1 < year2;
  return years.sort(checkYears);
}

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];
console.log(sortYears(years));

years.forEach((year) => console.log(year));
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
