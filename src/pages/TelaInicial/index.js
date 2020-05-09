import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { LoginManager } from "react-native-fbsdk";
import { GoogleSignin } from "@react-native-community/google-signin";

import {
  Container,
  Text,
  LogoutButton,
  TextButton,
  PerfilContainer,
  ImageContainer,
  Avatar,
  NomeUsuario,
  EmailUsuario
} from './styles';

import { logOut } from "../../store/modules/auth/actions";

export default function TelaInicial() {
  const dispatch = useDispatch();

  const perfil = useSelector(state => state.usuario.perfil_usuario);
  const origem_usuario = useSelector(state => state.usuario.origem_usuario);

  async function handleLogOut() {
    try {
      if (origem_usuario === 'facebook') {
        LoginManager.logOut();
        dispatch(logOut());

      } else if (origem_usuario === 'google') {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        dispatch(logOut());
      } else {
        dispatch(logOut());
      }

    } catch (error) {
      console.log('logout error', error)
    }
  }


  return (
    <Container>
      <Text>Bem-vindo {perfil.name}</Text>

      <PerfilContainer>

        <ImageContainer>
          <Avatar source={{ uri: perfil.avatar || perfil.photo }} />
        </ImageContainer>

        <NomeUsuario>{perfil.name}</NomeUsuario>
        <EmailUsuario>{perfil.email}</EmailUsuario>
      </PerfilContainer>


      <LogoutButton onPress={handleLogOut}>
        <TextButton>sair do app</TextButton>
      </LogoutButton>
    </Container>

  );
}

