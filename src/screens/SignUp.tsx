import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import { useForm, Controller } from 'react-hook-form'

import LogoSvg from '@assets/logo1.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

type FormDataProps = {
   name: string;
   email: string;
   password: string;
   password_confirm: string;

};


export function SignUp(){
  const { control, handleSubmit } = useForm<FormDataProps>();

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
            control={control}
            name='name'
            render={({ field: {onChange, value} }) => (
              <Input 
                placeholder='Name'
                onChangeText={onChange}
                value={value}
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