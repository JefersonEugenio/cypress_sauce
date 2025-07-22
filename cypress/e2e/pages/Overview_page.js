/// <reference types="cypress" />

import OverviewElement from "../elements/Overview_element";

const overviewElement = new OverviewElement

class OverviewPage {

    overviewFinish() {
        cy.get(overviewElement.finish())
            .should('be.visible')
            .click()
    }

    message() {
        cy.get(overviewElement.message())
            .should('be.visible')
    }

    messageTitle(mensagem) {
        cy.get(overviewElement.message())
            .should('have.text', mensagem)
    }

    backHome() {
        cy.get(overviewElement.backHome())
            .should('be.visible')
            .click()
    }

    verificarProduto() {
        cy.get(overviewElement.product())
            .should('be.visible')
    }

    verificarItemTotal() {
        cy.get('@guardado').then((textoGuardado) => {
        cy.get(overviewElement.itemTotal())
            .should('be.visible')
            .should('contain', textoGuardado);
        });
    }


    verificarCalcular() {
        cy.get('@guardado').then(textoGuardado => {
            const valorItem = parseFloat(textoGuardado.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;

            cy.get(overviewElement.taxa())
            .should('be.visible')
            .invoke('text')
            .then(textoTaxa => {
                const valorTaxa = parseFloat(textoTaxa.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;

                const soma = valorItem + valorTaxa;

                cy.get(overviewElement.total())
                .should('be.visible')
                .invoke('text')
                .then(textoTotal => {
                    const valorTotal = parseFloat(textoTotal.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;

                    expect(valorTotal).to.be.closeTo(soma, 0.01);
                });
            });
        });
    }

} export default OverviewPage