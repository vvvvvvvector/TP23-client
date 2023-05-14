import { FC } from 'react';

import IndetifierProvider from './IdentifierProvider';
import PasswordProvider from './PasswordProvider';
import PersonalProvider from './PersonalProvider';

interface PasswordProviderProps {
  children: React.ReactNode;
}

const SignUpProvider: FC<PasswordProviderProps> = ({ children }) => {
  return (
    <IndetifierProvider>
      <PasswordProvider>
        <PersonalProvider>{children}</PersonalProvider>
      </PasswordProvider>
    </IndetifierProvider>
  );
};

export default SignUpProvider;
