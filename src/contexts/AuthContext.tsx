import { useDTO } from '@dtos/UserDTO';

import { ReactNode, createContext } from 'react';

export type AuthContextDataProps = {
  user: useDTO;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

type AuthContextProviderProps = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider value ={{
      user:{
        id: '1',
        name: 'Eugenio',
        email: 'eugenio@email.com',
        avatar: 'eugenio.png'
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
};