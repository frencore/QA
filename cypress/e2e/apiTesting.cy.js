


describe('pruebas de apis', () => {

    it('Valida status 200', () => {
        cy.api('GET', `${Cypress.env('urlApi')}/ditto`
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response).property('status').to.equal(200);
            //imprime la respuesta JSON
           //cy.log(JSON.stringify(response, null, "\t"));
            //imprime la primera ability
            cy.log(response.body.abilities[0].ability);
            //imprime la segunda ability
            cy.log(response.body.abilities[1].ability);
            //imprime el peso
            cy.log('peso ' + response.body.weight + 'kg');
        });
    });

});