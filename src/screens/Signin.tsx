import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import { useNavigation } from '@react-navigation/native';

import { AuthNavigatiorRoutesProps } from '@routes/auth.routes';

import LogoSvg from '@assets/logo1.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';


export function SignIn(){

  const navigation = useNavigation<AuthNavigatiorRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('SignUp');
  
  }

  return(
    <ScrollView 
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg='gray.700' px={10} pb={16} >
        <Image
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
              Access your account
          </Heading>
          <Input 
            placeholder='Email'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input 
            placeholder='Password'
            secureTextEntry
          />

          <Button title='Access'/>

        </Center>
        <Center mt={24}>
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