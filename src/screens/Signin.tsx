import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatiorRoutesProps } from '@routes/auth.routes';

import { useAuth } from '@hooks/useAuth';

import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import LogoSvg from '@assets/logo1.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;

};

export function SignIn(){
  const { signIn } = useAuth();

  const navigation = useNavigation<AuthNavigatiorRoutesProps>();

  const {control, handleSubmit, formState:{errors}} = useForm<FormData>();

  function handleNewAccount(){
    navigation.navigate('SignUp')
  }

  function handleSignIn({ email, password }: FormData){
    signIn(email, password);
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