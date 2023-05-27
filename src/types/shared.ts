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
