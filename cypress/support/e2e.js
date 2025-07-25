import './commands'
import '@shelex/cypress-allure-plugin'

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    cy.allure().fileAttachment('Screenshot', screenshotFileName, 'image/png');
  }
});