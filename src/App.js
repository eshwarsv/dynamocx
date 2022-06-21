import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import { Amplify } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Hub, Logger } from 'aws-amplify';
import awsExports from './aws-exports';
import { AmplifyTheme } from 'aws-amplify-react';
import { SignIn } from '@aws-amplify/ui-react/dist/types/components/Authenticator/SignIn';
import { SignUp } from '@aws-amplify/ui-react/dist/types/components/Authenticator/SignUp';
//import { AmplifyTheme } from 'aws-amplify-react-native';
//mport {SignIn, SignUp, ConfirmSignUp, Greetings } from 'aws-amplify-react';

export default function App(){
  const[fontsLoaded, setFontsLoaded] = useState(false);
  const [authState,setAuthState] = useState("");
  const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, {background: '#0d4673'});

  const Mytheme  = Object.assign({},AmplifyTheme,{sectionHeader: MySectionHeader});

Amplify.configure(awsExports);
const handleAuthStateChange = ({state: any}) => {
      console.log(Auth);
      setAuthState(state);

}
if(fontsLoaded)
{
  console,log("Here 1");
  return(
 <View  style = {globalstyles.container}>
   <Authenticator hideDefault = {true}
   onstateChange = {({state: any}) => handleAuthStateChange(state)}
>
  {(authState=='signIn') ? <SignIn /> : (authState=='SignUp') ? <SignUp/>:
  <View><Text>Testing....</Text></View>}
</Authenticator>
:
<Provider store = {store}>
  <BottomNavigation />
</Provider>

 </View>
  );
} else{
  console.log('Here');
  return(
<AppLoading 
startAsync={getFonts}
onFinish = {() => setFontsLoaded(true)}
onError = {console.warn}
/>
);
}

}