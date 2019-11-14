import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import logo from '../../assets/falemais.png';
import {
  Container,
  SubmitButton,
  Content,
  FirstContent,
  SecondContent,
  Header,
  Form,
  Results,
} from './styles';

export default class Main extends Component {
  state = {
    from: '',
    destination: '',
    time: '',
    service: '',
    pricewFaleMais: '0.00',
    pricewoFaleMais: '0.00',
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await api.post('/', {
      from: this.state.from,
      destination: this.state.destination,
      time: this.state.time,
      service: this.state.service,
    });

    const { pricewFaleMais, pricewoFaleMais } = response.data;

    this.setState({
      pricewFaleMais,
      pricewoFaleMais,
    });
  };

  render() {
    const data = {
      place: ['', '011', '016', '017', '018'],
      service: ['', 'FaleMais 30', 'FaleMais 60', 'FaleMais 120'],
    };

    return (
      <>
        <Header>
          <Link to="/">
            <img src={logo} alt="FaleMais" width={350} />
          </Link>
        </Header>

        <Container>
          <Content>
            <FirstContent>
              <h2> Seja bem-vindo!</h2>
              <p>Veja como suas ligações ficarão mais baratas</p>
            </FirstContent>
            <SecondContent>
              <Form onSubmit={this.handleSubmit}>
                <label>Origem: </label>
                <select
                  onChange={e => {
                    this.setState({ from: e.target.value });
                  }}
                >
                  {data.place.map((from, id) => {
                    return <option key={id}>{from}</option>;
                  })}
                </select>

                <label>Destino: </label>
                <select
                  onChange={e => {
                    this.setState({ destination: e.target.value });
                  }}
                >
                  {data.place.map((to, id) => {
                    return <option key={id}>{to}</option>;
                  })}
                </select>

                <label>service: </label>
                <select
                  onChange={e => {
                    this.setState({ service: e.target.value });
                  }}
                >
                  {data.service.map((service, id) => {
                    return <option key={id}>{service}</option>;
                  })}
                </select>

                <label>time: </label>
                <input
                  type="text"
                  placeholder=" Quantos minutos?"
                  value={this.state.time}
                  onChange={e => {
                    this.setState({ time: e.target.value });
                  }}
                />
              </Form>
              <SubmitButton onClick={this.handleSubmit}>Calcular</SubmitButton>
            </SecondContent>
          </Content>
        </Container>
        <Results>
          <h2>
            <span>
              <strong>FALE</strong>
              MAIS
            </span>
            : {`${'R$ ' + this.state.pricewFaleMais}`}
          </h2>
          <h2>Outros: {`${'R$ ' + this.state.pricewoFaleMais}`}</h2>
        </Results>
      </>
    );
  }
}
