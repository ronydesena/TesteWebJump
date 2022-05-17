import tests from '../support/pages/qaTest'

describe('Testes', function(){
    context('Teste 1: Quando acessar a página', function(){
        it('Deve clicar e verificar os botões', function(){
            tests.go()
            tests.verifificarBotao()
        })
    })

    context('Teste 2: Quando acessar o Iframe', function(){
        it('Deve clicar e verificar os botões', function(){
            tests.go()
            tests.verificarIframe()
        })
    })

    context('Teste 3: Quando acessar a página', function(){
        it('Deve preencher o campo de texto, clicar no botão, no checkbox, selecionar opção e verificar imagem', function(){
            tests.go()
            tests.realizarAcoes()
        })
    })
})