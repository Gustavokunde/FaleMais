import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import api from './src/services/api';

import {
  Container,
  Title,
  SubTitle,
  Inpui,
  Button,
  FirstContent,
  SecondContent,
  Texto,
  Results,
  Imagem,
} from './styles';

export default class App extends Component {
  state = {
    origem: '',
    destino: '',
    tempo: '',
    plano: '',
    pricewFaleMais: '0.00',
    pricewoFaleMais: '0.00',
  };

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = async e => {
    const response = await api.post('/', {
      from: this.state.origem,
      destination: this.state.destino,
      time: this.state.tempo,
      service: this.state.plano,
    });

    const { pricewFaleMais, pricewoFaleMais } = response.data;

    this.setState({
      pricewFaleMais,
      pricewoFaleMais,
    });
  };

  render() {
    return (
      <Container>
        <Imagem
          source={require('./falemais.png')}
          resizeMode="contain"
        ></Imagem>
        <FirstContent>
          <Title>Seja bem-vindo!</Title>
          <SubTitle>Veja como suas ligações ficarão mais baratas</SubTitle>
        </FirstContent>
        <SecondContent>
          <Texto>Origem:</Texto>

          <RNPickerSelect
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ origem: itemValue });
            }}
            items={[
              { label: '011', value: '011' },
              { label: '016', value: '016' },
              { label: '017', value: '017' },
              { label: '018', value: '018' },
            ]}
          />
          <Texto>Destino:</Texto>
          <RNPickerSelect
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ destino: itemValue });
            }}
            items={[
              { label: '011', value: '011' },
              { label: '016', value: '016' },
              { label: '017', value: '017' },
              { label: '018', value: '018' },
            ]}
          />
          <Texto>Plano:</Texto>
          <RNPickerSelect
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ plano: itemValue });
            }}
            items={[
              { label: 'FaleMais 30', value: 'FaleMais 30' },
              { label: 'FaleMais 60', value: 'FaleMais 60' },
              { label: 'FaleMais 120', value: 'FaleMais 120' },
            ]}
          />

          <Texto>Tempo:</Texto>

          <Inpui
            placeholder="Quantos minutos?"
            onChangeText={tempo => this.setState({ tempo })}
            value={this.state.tempo}
          />
          <Button title="Calcular" onPress={this.handleSubmit}>
            Calcular
          </Button>
        </SecondContent>
        <Results>FALEMAIS:{`${'R$ ' + this.state.pricewFaleMais}`}</Results>
        <Results>Outros:{`${'R$ ' + this.state.pricewoFaleMais}`}</Results>
      </Container>
    );
  }
}
