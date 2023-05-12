import { FC } from 'react';

import IndetifierProvider from './IdentifierProvider';
import PasswordProvider from './PasswordProvider';

interface PasswordProviderProps {
  children: React.ReactNode;
}

const SignUpProvider: FC<PasswordProviderProps> = ({ children }) => {
  return (
    <IndetifierProvider>
      <PasswordProvider>{children}</PasswordProvider>
    </IndetifierProvider>
  );
};

export default SignUpProvider;
