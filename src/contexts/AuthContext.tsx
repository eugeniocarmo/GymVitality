import { useDTO } from '@dtos/UserDTO';

import { ReactNode, createContext, useState } from 'react';

export type AuthContextDataProps = {
  user: useDTO;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

type AuthContextProviderProps = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {

  const [user, setUser] = useState({
    id: '1',
    name: 'Eugenio',
    email: 'eugenio@email.com',
    avatar: 'eugenio.png'
});
  return (
    <AuthContext.Provider value ={{ user }}>
      {children}
    </AuthContext.Provider>
  )
};