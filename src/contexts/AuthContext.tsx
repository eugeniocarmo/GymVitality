import { UserDTO } from '@dtos/UserDTO';
import { SignIn } from '@screens/SignIn';


import { ReactNode, createContext, useState } from 'react';

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string )=>void;
}

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);


export function AuthContextProvider({ children }: AuthContextProviderProps) {

  const [user, setUser] = useState({
    id: '1',
    name: 'Eugenio',
    email: 'eugenio@email.com',
    avatar: 'eugenio.png'
  });

  function signIn(email: string, password: string){
    setUser({
      id: '',
      name: '',
      email,
      avatar: '',
    });
  }

  return (
    <AuthContext.Provider value ={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
};