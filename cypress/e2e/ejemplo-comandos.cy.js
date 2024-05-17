

describe('Comandos con Cypress checkbox y radio', () => {

  beforeEach('Funcionamiento de comandos para checkbox y radio', () => {
    cy.visit('https://example.cypress.io/commands/actions');
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

describe('Comandos con Cypress Select',()=>{
  beforeEach('Funcionamiento de comandos para Select', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.wait(1000);
  });

  it('Valida el valor de la primera opcion',()=>{
    cy.get('.action-select').should('have.value', '--Select a fruit--');
  });

  it('Selecciona la opcion que hace match',()=>{
    cy.get('.action-select').select('apples');
    cy.log('confirma seleccion de apples');
    cy.get('.action-select').should('have.value', 'fr-apples');
  });

  it('Seleccion multiple opciones',()=>{
    cy.get('.action-select-multiple').select(['apples', 'oranges', 'bananas']);
    cy.log('al obtener multiples valores seleccionados los compara usando chai');
    cy.get('.action-select-multiple').invoke('val').should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas']);
  });
});

describe('Para obtener un elemento DOM en un índice específico',()=>{
  it('como usar el comando .eq() para multiples elementos con el mismo id',()=>{
    cy.visit('https://example.cypress.io/commands/traversal');
    cy.get('.traversal-list>li').eq(1).should('contain', 'siamese');
  });
});