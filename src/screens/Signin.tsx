import { useNavigation } from '@react-navigation/native';

import { AuthNavigatiorRoutesProps } from '@routes/auth.routes';

import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';


import { useForm, Controller } from 'react-hook-form';

import LogoSvg from '@assets/logo1.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { FormDataProps } from './SignUp';


export function SignIn(){

  const {control, handleSubmit, formState:{errors}} = useForm<FormDataProps>();

  const navigation = useNavigation<AuthNavigatiorRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('SignUp')
  
  }

  function handleSignIn({email, password}: FormDataProps){
    console.log({email, password});
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
              required: "Please enter your email address",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Please enter a valid email address"
              }
            }}

            render={ ({field: {onChange, value}}) => (
              <Input
                onChangeText={onChange}
                
                placeholder='E-mail'
                value={value}
                errorMessage={errors.email?.message}
                keyboardType='email-address'
                autoCapitalize='none'
                
              />
            )}
          />
          
          
          <Controller 
            control={control}
            name='password'
            rules={{
              required: "Please enter your password",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long"
              }
            }}
            render={ ({field: {onChange, value}}) => (
              <Input 
                onChangeText={onChange}
                
                placeholder='Password'
                secureTextEntry
                value={value}
                onSubmitEditing={handleSubmit(handleSignIn)}
                returnKeyType='send'
                errorMessage= {errors.password?.message}
                
              />
            )}
          />

          <Button 
            title='Access'
            onPress={handleSubmit(handleSignIn)}
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