# [Nuvem de Cinzas](https://morais90.github.io/cloud-of-ashes/)
[![Build Status](https://travis-ci.org/morais90/cloud-of-ashes.svg?branch=master)](https://travis-ci.org/morais90/cloud-of-ashes)

## Como utilizar o projeto
- Para iniciar o server localmente utilize `npm start`
- Para compilar utilize `npm build`
- Para testar utilize `npm test`

## Entendendo o problema
Um vulcão acaba de entrar em erupção, provocando uma nuvem de cinzas que se alastra impedindo a circulação aérea. O governo está muito preocupado e deseja saber quando que a nuvem de cinzas irá atingir todos os aeroportos do país.

Está disponível um mapa detalhando a situação atual. O mapa é retangular, dividido em pequenos quadrados. Neste mapa existem três tipos de quadrados: nuvem (indicando que esta região do mapa já está coberto por nuvens), aeroportos (indicando a localização de um aeroporto) e todas as outras (indicando locais onde a nuvem ainda não chegou).

A cada dia, a nuvem expande-se um quadrado na horizontal e um quadrado na vertical. Ou seja, ao fim de cada dia, todos os quadrados adjacentes (vertical ou horizontalmente) a uma nuvem, também passam a conter nuvens.

Para preparar os planos de contingência, o governo necessita saber: quantos dias demorará para ao menos um aeroporto ficar coberto pelas nuvens e daqui quantos dias todos os aeroportos estarão cobertos pelas nuvens.

Dados um quadriculado com L linhas e C colunas, além da indicação inicial das nuvens e dos aeroportos, desenvolva uma programa que informe o número de dias até um primeiro aeroporto ficar debaixo da nuvem de cinzas e o número de dias até que todos os aeroportos ficarem cobertos pelas cinzas.

## Instruções
Por padrão, o simulador traz uma grade de 5 linhas e 12 colunas, mas esse é um dado que você pode alterar conforme sua necessidade.

Por exemplo, se você precisa de uma grade 10x10 é só alterar no campo linha e coluna. A grade será atualizada automaticamente.

O próximo passo, após definir a grade, é determinar aonde estão os aeroportos e as nuvens de cinzas. Essa é uma etapa muito fácil: é só clicar em cima do símbolo do Céu Aberto que ele passará automaticamente para o Aeroporto e clicando novamente para a Nuvem de Cinzas.

Se pintar alguma dúvida sobre os símbolos, você pode utilizar a legenda que fica localizada na parte superior a direita do simulador.

Assim que você determinar a localização, será possível observar, abaixo da grade, o resultado, ou seja, em qual dia o primeiro e o último aeroporto estará coberto pelas cinzas.

Essa é uma etapa muito legal: você pode fazer a conferência da simulação através do botão Simular o próximo dia, assim será possível acompanhar o avanço das nuvens na grade. Quando seu avião ficar vermelho, significa que o aeroporto foi atingido pela nuvem de cinzas.

Você também pode voltar um dia na simulação através do botão Simular o dia anterior.

Ah! Uma informação importante: qualquer mudança no tamanho da grade é necessário que você informe as novas localizações do aeroporto e da nuvem. Bom uso! :)


