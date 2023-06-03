const test = {
  '03-06-2023': {
    calories: 2000,
    carbohydrates: 300,
    fat: 50,
    protein: 100,
  },
  '04-06-2023': {
    calories: 2000,
    carbohydrates: 300,
    fat: 50,
    protein: 100,
  },
  '05-06-2023': {
    calories: 2000,
    carbohydrates: 300,
    fat: 50,
    protein: 100,
  },
  '06-06-2023': {
    calories: 2000,
    carbohydrates: 300,
    fat: 50,
    protein: 100,
  },
};

export const getTodaysDate = (): string => {
  const date = new Date();

  return `${String(date.getDate()).padStart(2, '0')}-${String(
    date.getMonth() + 1
  ).padStart(2, '0')}-${date.getFullYear()}`;
};

export const daysNames = [
  {
    name: 'Monday',
    shortName: 'Mon',
  },
  {
    name: 'Tuesday',
    shortName: 'Tues',
  },
  {
    name: 'Wednesday',
    shortName: 'Wed',
  },
  {
    name: 'Thursday',
    shortName: 'Thurs',
  },
  {
    name: 'Friday',
    shortName: 'Fri',
  },
  {
    name: 'Saturday',
    shortName: 'Sat',
  },
  {
    name: 'Sunday',
    shortName: 'Sun',
  },
];
