import { el } from './elements'

class Tests {

    go() {
        cy.visit('qa-test/')
    }

    verifificarBotao() {
        cy.get(el.button1)
            .click()
            .should('not.be.visible')
        cy.get(el.button2)
            .click()
            .should('not.be.visible')
        cy.get(el.button4)
            .click()
            .should('not.be.visible')
    }

    verificarIframe() {
        const iframe = function () {
            return cy
                .get('iframe[src*=buttons]')
                .its('0.contentDocument.body')
                .should('not.be.empty')
                .then(cy.wrap)
        }
        iframe().find(el.button1).click()
        iframe().find(el.button2).click()
        iframe().find(el.button4).click()
    }

    realizarAcoes() {
        cy.get(el.textName)
            .type('Rony')

        cy.get(el.button1)
            .click()
            .should('not.be.visible')

        cy.get(el.checkbox)
            .click()
            .should('be.checked')

        cy.get(el.select)
            .select('ExampleTwo')
            .should('have.value', 'option_two')

        cy.get(el.img)
            .should('be.visible')

    }
}

export default new Tests()