

describe('Comandos con Cypress', () => {

  beforeEach('Funcionamiento de comandos para checkbox y radio', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.wait(1000);
  });


  it('Solo selecciona los checkbox y radio que no estan agrupadoss', () => {
    cy.log('verificación coincidentes o elementos de radio en sucesión');
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check();
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').should('be.checked');

    cy.log('Valida que se puedan checkear y selecciona los dos radio pero solo uno puede estar checkeado');
    cy.get('.action-radios [type="radio"]').not('[disabled]').check();
    cy.get('.action-radios [type="radio"]').not('[disabled]').should('be.checked');

  });

  it('selecciona los checkbox que tengan el valor checkbox1 y checkbox2 que estan en el array', () => {
    cy.get('.action-multiple-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox2']);
    cy.get('.action-multiple-checkboxes [type="checkbox"]').should('be.checked');
  });

  it('selecciona los checkbox y radio que no se puedan seleccionar',()=>{
    cy.get('.action-checkboxes [disabled]').check({ force: true });
    cy.get('.action-checkboxes [disabled]').should('be.checked');
  
    cy.get('.action-radios [type="radio"]').check('radio3', { force: true });
    cy.get('.action-radios [type="radio"]').should('be.checked');
  });

});