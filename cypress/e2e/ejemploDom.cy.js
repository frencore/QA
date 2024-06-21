describe('Casos para manipulacion del DOM HTML', () => {

    beforeEach(() => {
        cy.log('Ejecutando precondiciones POR CADA PRUEBA');
        cy.visit('/search');
        cy.wait(2000);
    });

    it('busqueda por querySelectorAll en el DOM', () => {
        cy.document().then((doc) => {
            const linkWebinars = doc.querySelectorAll('a')[100];
            cy.get(linkWebinars).click();
        })
    });
    it('manipulacion de class por querySelectorAll en el DOM', () => {
        cy.document().then((doc) => {
            const bottonBusqueda = doc.querySelectorAll('button')[7];
            bottonBusqueda.classList.remove('SearchTemplate_heading__submit__fsd7Q');
            bottonBusqueda.classList.add('btn-danger');
            cy.get('.btn-danger').click();
        })
    });

});