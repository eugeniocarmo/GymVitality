import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import { useForm, Controller } from 'react-hook-form'

import LogoSvg from '@assets/logo1.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Pattern } from 'react-native-svg';

type FormDataProps = {
   name: string;
   email: string;
   password: string;
   password_confirm: string;

};


export function SignUp(){
  const { control, handleSubmit, formState:{ errors } } = useForm<FormDataProps>(
    {
      defaultValues: {
        name: 'Eugenio',
        email: 'eugenio@email.com',
        password: '123',
        password_confirm: '123'
      } 
    }
  );

  const navigation = useNavigation();

  function handleSignUp( { name, password, email, password_confirm }: FormDataProps){
    console.log({ name, password, email, password_confirm });
  }


  function handleGoBack(){
    navigation.goBack();
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

          <Text color="gray.100" fontSize="sm">Train your mind and body</Text>
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
            name='name'
            rules={{
              required: 'Inform your name.'
            }}
            control={control}
            render={({ field: {onChange, value} }) => (
              <Input 
                placeholder='Name'
                onChangeText={onChange}
                value={value}
              />
            
            )}
          />

          <Text color="gray.100"> {errors.name?.message}</Text>

          <Controller
            control={control}
            name='email'
            rules={{
              required: 'Inform your email.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address.'
              }
            }}
            render={({ field: {onChange, value} }) => (
              <Input 
                placeholder='Email'
                keyboardType='email-address'
                autoCapitalize='none'
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Text color="gray.100"> {errors.email?.message}</Text>

          <Controller
            control={control}
            name='password'
            render={({ field: {onChange, value} }) => (
              <Input 
                placeholder='Password'
                secureTextEntry
                onChangeText={onChange}
                value={value}
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
              />
            )}
          />
          

          <Button 
            title='Create and Access'
            onPress={handleSubmit(handleSignUp)}
          />

        </Center>
        
          
        <Button mt={24}
          title='Back to login'
          variant="outline"
          onPress={handleGoBack}
        />
        

      </VStack>
    </ScrollView>
  );
}