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

type MonthDataMap = {
  [key: string]: {
    calories: number;
    carbohydrates: number;
    fat: number;
    protein: number;
  };
};

const test: MonthDataMap = {
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

const parseDateToCorrectFormat = (date: Date): string => {
  return `${String(date.getDate()).padStart(2, '0')}-${String(
    date.getMonth() + 1
  ).padStart(2, '0')}-${date.getFullYear()}`;
};

export const getTodaysDate = (): string => {
  const date = new Date();

  return parseDateToCorrectFormat(date);
};

const getWeekDates = (): string[] => {
  // for start = x, end = y
  // Sunday -> -6 , +0 if 0
  // Saturday -> -5 , +1 if 6
  // Friday -> -4 , +2 if 5
  // Thursday -> -3 , +3 if 4
  // Wednesday -> -2 , +4 if 3
  // Tuesday -> -1 , +5 if 2
  // Monday -> -0 , +6 if 1

  let start = 0;
  let end = 0;

  const dayOfTheWeek = new Date().getDay();

  if (dayOfTheWeek === 0) {
    start = -6;
    end = 0;
  } else if (dayOfTheWeek === 6) {
    start = -5;
    end = 1;
  } else if (dayOfTheWeek === 5) {
    start = -4;
    end = 2;
  } else if (dayOfTheWeek === 4) {
    start = -3;
    end = 3;
  } else if (dayOfTheWeek === 3) {
    start = -2;
    end = 4;
  } else if (dayOfTheWeek === 2) {
    start = -1;
    end = 5;
  } else if (dayOfTheWeek === 1) {
    start = 0;
    end = 6;
  }

  let dates: Date[] = [];

  for (let i = start; i <= end; i++) {
    const someDate = new Date();

    const result = someDate.setDate(someDate.getDate() + i);

    dates.push(new Date(result));
  }

  return dates.map((date) => parseDateToCorrectFormat(date));
};

export const getWeekCaloriesData = (map: MonthDataMap): number[] => {
  const dates = getWeekDates();

  return dates.map((date) => {
    if (map[date]) {
      return map[date].calories;
    } else {
      return 0;
    }
  });
};
