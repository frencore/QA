class indexPage {

    search = (texto) => {
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.searchInput).type(texto);
            cy.get(locators.searButton).click();
        });
    };


}
export default new indexPage();