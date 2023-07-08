import { useDTO } from '@dtos/UserDTO';

import { createContext } from 'react';

export type AuthContextDataProps = {
  user: useDTO;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);