import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView, useToast } from 'native-base';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '@services/api'; 

import LogoSvg from '@assets/logo1.svg';
import BackgroundImg from '@assets/background.png';

import { AppError } from '@utils/AppError';

import { Input } from '@components/Input';
import { Button } from '@components/Button';


type FormDataProps = {
   name: string;
   email: string;
   password: string;
   password_confirm: string;

};


const signUpSchema = yup.object({
  name: yup.string().required("Informe your name."),
  email: yup.string().required("Informe your email.").email("Invalid email."), 
  password: yup.string().required("Informe your password").min(6, "Password must be at least 6 characters."),
  password_confirm: yup.string().required("Informe your password confirmation.").oneOf([yup.ref("password")], "Your password confirmation need to match")
}); 

export function SignUp(){

  const toast = useToast();

  const { control, handleSubmit, formState:{ errors } } = useForm<FormDataProps>(
    {
      resolver: yupResolver(signUpSchema)
    }
  );

  const navigation = useNavigation();
  function handleGoBack(){
    navigation.goBack();
  }

  async function handleSignUp( { name, password, email }: FormDataProps) {
    try {
      const response = await api.post('/users', {name, email, password});
      console.log(response.data)
    } catch(error){
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Unable to create your account. Try again later'
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
            fontFamily={'heading'}>
              Create your account
          </Heading>

          <Controller
            control={control}
            name='name'
           
            render={({ field: {onChange, value} }) => (
              <Input 
                placeholder='Name'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name='email'
            render={({ field: {onChange, value} }) => (
              <Input 
                placeholder='Email'
                keyboardType='email-address'
                autoCapitalize='none'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name='password'
            render={({ field: {onChange, value} }) => (
              <Input 
                placeholder='Password'
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          />
          <Controller
            control={control}
            name='password_confirm'
            render={({ field: {onChange, value} }) => (
              <Input 
                placeholder='Confirm your Password'
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType='send'
                errorMessage={errors.password_confirm?.message}
                
              />
            )}
          />
          

          <Button 
            title='Create and Access'
            onPress={handleSubmit(handleSignUp)}
          />

        </Center>
        
          
        <Button mt={12}
          title='Back to login'
          variant="outline"
          onPress={handleGoBack}
        />
        

      </VStack>
    </ScrollView>
  );
}