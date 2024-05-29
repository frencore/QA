import indexPage from '../support/pages/index';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
  })
});

describe('Test ejemplo', () => {
  let a = 1 + 1;
  let b = 2;
  it('Descripcion Prueba-puede ser numero de ticket', () => {
    expect(a == b, 'ambos terminos tienen que ser iguales').to.equal(true);
    expect(a == b, 'ambos terminos tienen que ser iguales').to.be.true;
  });

  it('descripcion prueba restar', () => {
    expect(a - b).to.equal(0);
  });
});

describe('Casos de prueba Busqueda', () => {
  before(() => {
    cy.log('Ejecutando precondiciones de TODAS a las pruebas');
  });

  beforeEach(() => {
    cy.log('Ejecutando precondiciones POR CADA PRUEBA');
    cy.visit('/search');
    cy.wait(2000);
  });
  afterEach(() => {
    cy.log('Ejecutando postcondiciones POR CADA PRUEBA');
  });

  it('Busqueda con resultados', () => {
    //trae locator desde fixtures index.json la funcion search es pages index.js (Page object)
    indexPage.search('Products');
    cy.wait(2000);
    cy.get(':nth-child(1) > .SearchResultItem_result-item__title__3sI2_').contains('Products');
  });

  it('Busqueda con resultados usando json', () => {
    //forma recomendada de locators por cypress
    cy.fixture('index').then((locators) => {
      cy.get(locators.searchInput).type('Products');
      cy.get(locators.searButton).click();
    });
  });

  it('Busqueda con resultados usando comando custom de cypress', () => {
    //forma recomendada por cypress funcion custom mas locators en fixtures
    cy.buscar('Products');
  });


  it('escribir y borrar', () => {
    //si se va a probar distintos comportamientos de un elemento mejor se encadena todo
    cy.get('.SearchTemplate_heading__input__X2uCO').clear().type('Products').clear().type('Hola');
    //hace lo mismo pero usando funciones custom de cypress
    cy.escribirYBorrar('Products', 'Hola');
  });

  after(() => {
    cy.log('Ejecutando postcondiciones de TODAS a las pruebas');
  });
});

