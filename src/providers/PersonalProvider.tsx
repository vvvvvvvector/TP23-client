import { FC, createContext, useState } from 'react';

interface IPersonal {
  age: string;
  sex: string;
  weight: string;
  height: string;
  activity: string;
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
  const [personal, setPersonal] = useState({
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
