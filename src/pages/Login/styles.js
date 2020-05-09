import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

export const Text = styled.Text`
  font-size: 40px;
  text-transform: uppercase;
  font-weight: bold;
`;
export const FaceButton = styled.TouchableOpacity`
margin: 50px 0 10px;
background: #4267B2;
border-radius: 4px;
padding: 10px 15px;
width: 230px;
`;

export const TextButton = styled.Text`
color: #fff;
font-size: 20px;
font-weight: bold;
text-align: center;
`;

export const GoogleButton = styled.TouchableOpacity`
background: #fff;
border-radius: 4px;
border: 1px solid #222;
padding: 10px 15px;
width: 230px;
margin-bottom: 10px;
`

export const TextGoogleButton = styled.Text`
color: #222;
font-size: 20px;
font-weight: bold;
text-align: center;

`;