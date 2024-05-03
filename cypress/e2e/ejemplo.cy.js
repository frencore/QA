describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Test ejemplo', () => {
  it('Descripcion Prueba-puede ser numero de ticket', () => {
    let a = 1 + 1;
    let b = 2;
    expect(a == b).to.equal(true);

  })
});