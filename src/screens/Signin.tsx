import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView, useToast } from 'native-base';

import { AuthNavigatiorRoutesProps } from '@routes/auth.routes';

import { useAuth } from '@hooks/useAuth';


import LogoSvg from '@assets/logo1.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { AppError } from '@utils/AppError';

type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;

};

export function SignIn() {

  const [isLoading, setIsLoading] = useState(false);


  const { signIn } = useAuth();
  const navigation = useNavigation<AuthNavigatiorRoutesProps>();
  const toast = useToast();

  const {control, handleSubmit, formState:{errors}} = useForm<FormData>();

  function handleNewAccount(){
    navigation.navigate('SignUp')
  }

  async function handleSignIn({ email, password }: FormData){
    try {
      setIsLoading(true);
      await signIn(email, password);
    } catch (error) {
      const isAppError = error instanceof AppError;
      
      setIsLoading(false);
      const title = isAppError ? error.message : "It was not possible to sign in. Try again later.";
      toast.show({
        title, 
        placement: 'top',
        bgColor: 'red.500'
      })
    }
  }

  return(
    <ScrollView 
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg='gray.700' px={10} pb={16} >
        <Image
          defaultSource={BackgroundImg}
          source={BackgroundImg}
          alt='People training'
          resizeMode='contain'
          position='absolute'
        />
        
        <Center my={24}>
          <LogoSvg/>
          <Text color="gray.100" fontSize="sm">Train your body and mind</Text>
        </Center>

        <Center>
          <Heading 
            color="gray.100" 
            fontSize="xl"
            mb={6}
            fontFamily={"heading"}>
              Access your account
          </Heading>

          <Controller 
            control={control}
            name="email"
            rules={{
              required: "Enter your email address"}}
            render={ ({field: {onChange}}) => (
              <Input
                placeholder='E-mail'
                keyboardType='email-address'
                onChangeText={onChange}
                errorMessage={errors.email?.message}
                autoCapitalize='none'
                
              />
            )}
          />
          
          
          <Controller 
            control={control}
            name='password'
            rules={{required: 'Enter your password'}}
            render={ ({field: {onChange}}) => (
              <Input 
                secureTextEntry
                placeholder='Password'
                onChangeText={onChange}
                errorMessage={errors.password?.message}
             />
            )}
          />

          <Button 
            title='Access'
            onPress={handleSubmit(handleSignIn)}
            isLoading={isLoading}
          />

        </Center>
        <Center mt={12}>
          <Text 
            color="gray.100"
            fontSize="sm"
            fontFamily={'body'}
            mb={3}
          >
            Don't have access?
          </Text>
          <Button 
            title='Create an account'
            variant="outline"
            onPress={handleNewAccount}
            
          />
        </Center>

      </VStack>
    </ScrollView>
  );
}
