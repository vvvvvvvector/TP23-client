import { FC, createContext, useState } from 'react';

interface IIdentifier {
  email: string;
  username: string;
}

export type IndetifierContextStateType = [
  IIdentifier,
  React.Dispatch<React.SetStateAction<IIdentifier>>
];

type IdentifierContextType = IndetifierContextStateType | undefined;

export const IndetifierContext =
  createContext<IdentifierContextType>(undefined);

interface IndetifierProviderProps {
  children: React.ReactNode;
}

const IndetifierProvider: FC<IndetifierProviderProps> = ({ children }) => {
  const [identifier, setIdentifier] = useState<IIdentifier>({
    email: '',
    username: '',
  });

  return (
    <IndetifierContext.Provider value={[identifier, setIdentifier]}>
      {children}
    </IndetifierContext.Provider>
  );
};

export default IndetifierProvider;
