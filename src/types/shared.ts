export type SessionUserType = {
  token: string;
  data: {
    id: number;
    username: string;
    email: string;
    height: number;
    weight: number;
    sex: string;
    age: number;
    activity: string;
    imgUrl: string;
  };
};

export type DonutsDataType = {
  current: {
    calories: number;
    carbohydrates: number;
    fat: number;
    protein: number;
  };
  norm: {
    calories: number;
    carbohydrates: number;
    fat: number;
    protein: number;
  };
} | null;

export type UserSignUpType = {
  email: string;
  username: string;
  password: string;
  age: number;
  sex: string;
  weight: number;
  height: number;
  activity: string;
};

export type sexType = 'm' | 'f';

export type activityType =
  | 'minimal'
  | 'week'
  | 'medium'
  | 'high'
  | 'extra activity';
