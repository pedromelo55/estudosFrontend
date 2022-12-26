# NodeJS

* Backend
* Frontend
* Micro serviços
* API
    - WebApp
    - Mobile
    - Desktop
* Scripts e Automação
* Machine Learning
* I.A

Se precisar de muito processamento, ou seja, CPU, não é recomendado usar o Node
_________________________________________________________________________________________________

# Vantagens

* Rápido
    - Execução
    - Prototipar
* Alta escalabilidade
* Aplicações de ponta
* JS everywhere
* Ecosistema gigante
* Casos de uso
    - Netflix
    - Paypal
    - https://www.simform.com/nodejs-use-case/
_________________________________________________________________________________________________

# O que é?

* != Framework
* != Linguagem
* JS Runtime Enviroment (Ambiente de Execução)
_________________________________________________________________________________________________

# V8 (motor do google)

* Javascript Engine
* Compõe o ambiente, a máquina virtual, que irá rodar o JS na máquina

- Interpretador de JS para a linguagem da máquina
- Criado em C++
- Baseado nas últimas features do JS
- Focado para Chrome mas tem todo o cuidado de não quebrar o Node
- Não possui a DOM, console ou File System
_________________________________________________________________________________________________

# Como funciona?

* Vamos ver o motivo do NOde.js ser tao rápido

* Imagine...
    - Uma baalha entre dois restaurantes, quem terá o melhor atendimento?

Restaurante do Tio Apache
    - Diferencial: Cada cliente tem seu próprio garçon

    * Um cliente vai fazer o pedido de uma pizza
        - Um garçon é direcionado até sua mesa
        - Pega o pedido e leva até a cozinha para o chef preparar
        - O chafe, por regra do restaurante, irá proibir e bloquear o garçon de oltar para o cliente até o que o pedido estiver pronto
        - O cliente queria muito fazer mais pedidos, mas não pode, pois o garçon está bloqueado
        - Após o pedido ficar pronto, o garçon leva de volta para o cliente
    * O cliente foi embora e por regra do restaurante, o garçon é despedido

    * Chegou 100 cliente numa noite
        - O gerente precisou contratar mais garçons

    ~ É um serviço caro e de primeira, mito lento né? A regra de bloquear os garçons e ter que contratar um garçon para cada cliente.
    torna o serviço caro e lento.

Restaurante do Noderson
    - Diferencial: O garçon de nome Eveneto Lupin

    * Mesa 1: O cliente vai fazer o pedido de uma pizza
        - Eveneto Lupin pega o pedido e leva para o Chef
        - Volta com gosto de gás para a próxima mesa
    * Mesa 2: O cliente faz o pedido de uma salada
        - Eveneto Lupin já pegou o pedido e levou para o Chef
    * O chef tocou um sininho avisando que o pedido da mesa 1 já fucou pronto e Eveneto corre para pegar e fazer a entrega do pedido    

    ~ O segredo de Eveneto é ue ele sabe trabalhar de maneira assíncrona, fazendo mais de 1 evento de cada vez e não tem nada que o bloqueie.
    Ele é muito solitictado e faz seu trabalho muito bem feito

## Decifrando
* Tio Apache = Apache
* Noderson = Node
* Cliente = Usuário
* Pedido = Request
* Garçon = Thread
* Cozinha = Servidor
* Chef = Banco de dados
* Eveneto Lupin = Event loop

~ Node single-threads, non-blocking e asynchronous
_________________________________________________________________________________________________

# História

* Ryan Dhal em 2009
* NPM Versão 1 em 2011 https://npmjs.org
    - Compartilhamento de bibliotecas
    - Grande mudança na manutenção e compartilhamento de códigos
* 2015 Node.js Foundation
    - Incluiu: IBM, Microsoft, PayPal e Groupon
    - Passou a fazer parte do https://openjsf.org/
* https://github.com/nodejs/node
* Comunidade ativa!
_________________________________________________________________________________________________

# Configurando o ambiente
- baixar lts

## REPL
* Real-Eval-Print-Loop
* Escrever Javascript em um ambiente node, direto no terminal
* Para entrar digite <node> no terminal