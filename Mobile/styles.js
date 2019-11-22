import styled from 'styled-components/native';
import Picker from 'react-native';

import MyFont from './amsipro-ultra.otf';

export const Container = styled.View`
  margin: 0;
  padding: 0;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  background: #ffa615;

  @font-face {
    font-family: 'MyFont';
    src: url(${MyFont});
  }
`;

export const Imagem = styled.Image`
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const FirstContent = styled.View`
  align-items: center;
  padding: 10px;
  background: #007bf4;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;
export const SecondContent = styled.View`
  padding: 10px;
  background: #fff;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const Inpui = styled.TextInput`
  height: 60px;
  align-content: center;
  background-color: #ecf0f9;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #eee;
  padding: 2px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #eee;
  padding: 10px;
`;

export const Texto = styled.Text`
  font-size: 18px;
  color: #000;
  padding: 10px;
`;

export const Results = styled.Text`
  font-family: sans-serif;
  font-size: 18px;
  color: #eee;
`;

export const Button = styled.Button`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  min-width: 120px;
  border-radius: 20px;

  background-color: #007bf4;
`;
