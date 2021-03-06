# Teste FaleMais

Este projeto foi desenvolvido para um processo seletivo realizado em 2019.
O Backend foi desenvolvido com Node.js e o Frontend com ReactJS.

O funcionamento segue o seguinte princípio:

Desafio
A empresa de telefonia Telzir, especializada em chamadas de longa distância nacional, vai
colocar um novo produto no mercado chamado FaleMais.

      Normalmente um cliente Telzir pode fazer uma chamada de uma cidade para outra pagando
    uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs
    de origem e destino:

      Origem          Destino             $/min
      011             016                  1.90
      016             011                  2.90
      011             017                  1.70
      017             011                  2.70
      011             018                  0.90
      018             011                  1.90

      Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até
    um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos
    excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são
    FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).


      A Telzir, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma
    página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os
    códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o
    plano FaleMais. O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2)
    sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para este
    problema.

#Como rodar

Para rodar o backend da aplicação, primeiro abra a pasta Backend pelo terminal e rode "yarn" para baixar as
dependências do node_modules, depois rode "yarn dev"

Para rodar o frontend, abra a pasta Frontend pelo terminal e rode "yarn" para baixar as
dependências do node_modules, depois rode rode "yarn start"
