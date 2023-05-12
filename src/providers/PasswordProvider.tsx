import { FC, createContext, useState } from 'react';

interface IPassword {
  password: string;
}

export type PasswordContextStateType = [
  IPassword,
  React.Dispatch<React.SetStateAction<IPassword>>
];

type PasswordContextType = PasswordContextStateType | undefined;

export const PasswordContext = createContext<PasswordContextType>(undefined);

interface PasswordProviderProps {
  children: React.ReactNode;
}

const PasswordProvider: FC<PasswordProviderProps> = ({ children }) => {
  const [password, setPassword] = useState({
    password: '',
  });

  return (
    <PasswordContext.Provider value={[password, setPassword]}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
