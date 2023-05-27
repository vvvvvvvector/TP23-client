import { FC, createContext, useState } from 'react';

import { sexType, activityType } from '@/types/shared';

interface IPersonal {
  age: string;
  sex: sexType;
  weight: string;
  height: string;
  activity: activityType;
}

export type PersonalContextStateType = [
  IPersonal,
  React.Dispatch<React.SetStateAction<IPersonal>>
];

type PersonalContextType = PersonalContextStateType | undefined;

export const PersonalContext = createContext<PersonalContextType>(undefined);

interface PersonalProviderProps {
  children: React.ReactNode;
}

const PersonalProvider: FC<PersonalProviderProps> = ({ children }) => {
  const [personal, setPersonal] = useState<IPersonal>({
    age: '',
    sex: 'm',
    weight: '',
    height: '',
    activity: 'minimal',
  });

  return (
    <PersonalContext.Provider value={[personal, setPersonal]}>
      {children}
    </PersonalContext.Provider>
  );
};

export default PersonalProvider;
