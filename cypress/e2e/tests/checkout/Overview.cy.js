/// <reference types="cypress" />

describe('A pagina do overview', () => { 

    beforeEach(() => {
        cy.sessionLogin()
        cy.userLogin(Cypress.env('user_name'))
        cy.adicionarProduto('Sauce Labs Backpack')
        cy.carrinhoProduto()
        cy.checkout()
    })

    it('Finalizar compra com produto no carrinho', () => {
        cy.get('.inventory_item_name').should('be.visible')
        cy.get('@guardado').then((textoGuardado) => {
        cy.get('.summary_subtotal_label')
            .should('be.visible')
            .should('contain', textoGuardado);
        });
        cy.get('@guardado').then(textoGuardado => {
            const valorItem = parseFloat(textoGuardado.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;

            cy.get('.summary_tax_label')
                .should('be.visible')
                .invoke('text')
                .then(textoTaxa => {
                    const valorTaxa = parseFloat(textoTaxa.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;

                    const soma = valorItem + valorTaxa;

                    cy.get('.summary_total_label')
                        .should('be.visible')
                        .invoke('text')
                        .then(textoTotal => {
                            const valorTotal = parseFloat(textoTotal.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;

                            expect(valorTotal).to.be.closeTo(soma, 0.01);
                        });
                });
        });
        cy.get('#finish').should('be.visible').click()
        cy.get('#back-to-products').should('be.visible').click()
    })
})