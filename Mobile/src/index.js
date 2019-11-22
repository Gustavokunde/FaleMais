import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import logo from '../../assets/falemais.png';
import {
  Container,
  SubmitButton,
  Content,
  FirstColumn,
  SecondColumn,
  Header,
  Form,
  Results,
  FormInput,
  LabelText,
} from './styles';

export default class Main extends Component {
  state = {
    origem: '',
    destino: '',
    tempo: '',
    plano: '',
    pricewFaleMais: '0.00',
    pricewoFaleMais: '0.00',
  };

  handleSubmit = async e => {
    fetch('http://localhost:3333', {
      method: 'POST',
      body: JSON.stringify({
        origem: '011',
        destino: '016',
        tempo: 20,
        plano: 'FaleMais 30',
      }),
    }).then(response => response.json());

    const { pricewFaleMais, pricewoFaleMais } = response.data;

    this.setState({
      pricewFaleMais,
      pricewoFaleMais,
    });

    console.log(pricewFaleMais);
  };

  render() {
    const data = {
      place: ['', '011', '016', '017', '018'],
      service: ['', 'FaleMais 30', 'FaleMais 60', 'FaleMais 120'],
    };

    return (
      <>
        <Container>
          <Content>
            <FirstColumn>
              <Title1> Seja bem-vindo!</Title1>
              <Title2>Veja como suas ligações ficarão mais baratas</Title2>
            </FirstColumn>
            <SecondColumn>
              <Form onSubmit={this.handleSubmit}>
                <LabelText>Origem: </LabelText>
                <FormInput
                  onChange={e => {
                    this.setState({ origem: e.target.value });
                  }}
                >
                  {data.place.map((from, id) => {
                    return <option key={id}>{from}</option>;
                  })}
                </FormInput>

                <LabelText>Destino: </LabelText>
                <FormInput
                  onChange={e => {
                    this.setState({ destino: e.target.value });
                  }}
                >
                  {data.place.map((to, id) => {
                    return <option key={id}>{to}</option>;
                  })}
                </FormInput>

                <LabelText>Plano: </LabelText>
                <FormInput
                  onChange={e => {
                    this.setState({ plano: e.target.value });
                  }}
                >
                  {data.service.map((plano, id) => {
                    return <option key={id}>{plano}</option>;
                  })}
                </FormInput>

                <LabelText>Tempo: </LabelText>
                <FormInput
                  type="text"
                  placeholder=" Quantos minutos?"
                  value={this.state.tempo}
                  onChange={e => {
                    this.setState({ tempo: e.target.value });
                  }}
                />
              </Form>
              <SubmitButton onClick={this.handleSubmit}>Calcular</SubmitButton>
            </SecondColumn>
          </Content>
        </Container>
        <Results>
          <h2>
            <span id="id_1">COM</span> FALEMAIS:{' '}
            {`${'R$ ' + this.state.pricewFaleMais}`}
          </h2>
          <h2>
            <span id="id_2">SEM</span> FALEMAIS:{' '}
            {`${'R$ ' + this.state.pricewoFaleMais}`}
          </h2>
        </Results>
      </>
    );
  }
}
