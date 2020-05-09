import React from 'react';
import { useDispatch } from "react-redux";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { GoogleSigninButton, GoogleSignin, statusCodes } from "@react-native-community/google-signin";

import { Container, Text, FaceButton, TextButton } from './styles';

import { FBloginRequest, GoogleLoginRequest } from "../../store/modules/auth/actions";

export default function Login() {
  const dispatch = useDispatch();

  async function handleTokenFB(token) {
    try {
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`);
      const responseJson = await response.json();

      dispatch(FBloginRequest(responseJson, token));
    } catch (error) {
      console.log('error handle Token', error);
    }
  }

  async function handleLoginFB() {
    try {
      let result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        console.log('login cancelado pelo usuário');

      } else {
        AccessToken.getCurrentAccessToken().then(data => {
          handleTokenFB(data.accessToken.toString());
        })
      }
    } catch (error) {
      console.log('erro handle login', error);
    }
  }

  GoogleSignin.configure();

  async function handleGoogleLogin() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.tron.log('user google', userInfo);
      dispatch(GoogleLoginRequest(userInfo));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.tron.log('login google Cancelado')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.tron.log('login em progresso...')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.tron.log('erro em progresso...')

      }
    }
  }

  return (
    <Container>
      <Text>Login</Text>

      <FaceButton onPress={() => handleLoginFB()}>
        <TextButton>Login com Facebook</TextButton>
      </FaceButton>

      <GoogleSigninButton
        style={{ width: 230, height: 60 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={handleGoogleLogin}
      />
    </Container >
  );
}