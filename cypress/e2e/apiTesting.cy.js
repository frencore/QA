


describe('pruebas de apis', () => {

    it('Valida status 200', () => {
        cy.request('GET', `${Cypress.env('urlApi')}/ditto`
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response).property('status').to.equal(200);
            cy.log(response.body.name);
        });
    });

});