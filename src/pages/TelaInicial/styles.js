import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 36px;
  font-weight: bold;
text-align: center;
  text-transform: uppercase;
`;
export const LogoutButton = styled.TouchableOpacity`
margin: 50px 0;
background: #4267B2;
border-radius: 4px;
padding: 10px 15px;
`;

export const TextButton = styled.Text`
color: #fff;
font-size: 20px;
font-weight: bold;
`;

export const PerfilContainer = styled.View`
flex: 1;
width: 100%;
justify-content: center;
align-items: center;
`;

export const ImageContainer = styled.View`
width: 190px;
height: 190px;
`;

export const Avatar = styled.Image`
height: 100%;
width: 100%;
`;

export const NomeUsuario = styled.Text`
margin-top: 10px;
font-size: 28px;
font-weight: bold;

`;

export const EmailUsuario = styled.Text`
font-size: 14px;
font-weight: bold;
color: #999;
`;