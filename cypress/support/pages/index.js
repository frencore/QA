class indexPage {

    constructor() {
        this.searchInput = '.SearchTemplate_heading__input__X2uCO';
        this.searButton = '.SearchTemplate_heading__submit__fsd7Q';
    };

    search = (texto) => {
        cy.get(this.searchInput).type(texto);
        cy.get(this.searButton).click();
    };


}
export default new indexPage();