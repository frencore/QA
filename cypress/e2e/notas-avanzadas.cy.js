describe("Notas de Cypress para QUIZ (https://cypressquiz.com/)", () => {
  it("Tipos de datos NaN (not a number)", () => {
    //Cypress convierte automáticamente el valor a Number o Boolean siempre que sea posible.
    // Además, en JavaScript, typeof NaN es number. Por lo tanto, registrará number.
    Cypress.env("Not a number", NaN);
    cy.log(typeof Cypress.env("Not a number"));
  });

  it("lista de ementos li", () => {
    //El comportamiento de consulta de este comando coincide exactamente con el funcionamiento de .eq() en jQuery.
    // Por lo tanto, si el índice es negativo, se contará hacia atrás desde el último elemento.
    cy.get("li").eq(-1);
  });

  it(".should()", () => {
    //Se ignorará cualquier valor devuelto por la función de devolución de llamada .should()
    //Por lo tanto, en la mayoría de los casos, .should() devuelve el mismo objeto que el comando anterior. en esta caso es "foo"
    cy.wrap("foo")
      .should((foo) => {
        expect(foo).to.eq("foo");
        return "boo";
      })
      .then((boo) => {
        expect(boo).to.eq("boo");
      });
  });
  it(".invoke() ", () => {
    //El método .invoke() se comporta de forma diferente cuando lo encadenas con otros comandos.
    //Por lo tanto, en este caso, se invocará addToStack y se enviará 4 a la stack matriz dos veces.
    const stack = [];
    const addToStack = (n) => stack.push(n);

    //wrap es como un yiel
    cy.wrap([addToStack]) //wrap espera el resultado de "addToStack"(1er llamado)
      .invoke(0, 4) //invoke llama a la funcion con el indice 0 y envia el valor 4 a la funcion (2do llamado)
      .then(() => console.log(stack));
    cy.log("https://docs.cypress.io/api/commands/invoke");
  });

  it(".its() ", () => {
    //El comando .its() se utiliza para acceder a las propiedades del array.
    //Por lo tanto, en este caso, intentará acceder a la propiedad en el índice, -1 que es undefined.
    cy.wrap(["JS", "TS"]).its(-1).should("eq", "TS");
  });

  it("be.visible", () => {
    //Si hay varios elementos, el comportamiento de la aserción be.visiblees diferente al de un solo elemento.
    //Se volverá a intentar hasta que al menos uno de los elementos se vuelva visible.
    cy.get("li").should("be.visible");
  });

  it(".contains()", () => {
    //De forma predeterminada, el método .contains() distingue entre mayúsculas y minúsculas.
    //Para que no distinga entre mayúsculas y minúsculas, puede utilizar { matchCase: false }.

    cy.contains("oración mayúscula");
    cy.get("div").contains("capital sentence", { matchCase: false });
  });
});

describe("Notas-2 de cypress metodo .should() ", () => {
  //La primera prueba fallará.
  //Porque no puedes invocar el comando Cypress dentro de la función .should()
  //Por lo tanto, utiliza los comandos Cypress antes o después. También puedes usar el comando .then().
  it("test #1", () => {
    cy.wrap("foo").should((foo) => cy.log(foo));
  });

  it("test #2", () => {
    cy.wrap("foo").then((foo) => cy.log(foo));
  });
});

describe("Notas-3 cypress metodo this.", () => {
  // El comando .as() se utiliza para almacenar el valor del comando anterior.
  // Puede acceder al valor almacenado mediante this una palabra clave.
  // Sin embargo, this no está disponible en las funciones de flecha.

  beforeEach(() => {
    cy.wrap("some text").as("text");
  });

  it("test #1", () => {
    cy.log(this.text);
  });

  it("test #2", function () {
    cy.log(this.text);
  });
});

describe("Notas-3 cypress", () => {
  //La primera prueba se aprobará, pero la segunda fallará.
  //porque todos los alias se restablecen antes de cada prueba (before se ejecuta una sola vez).
  //Por lo tanto, es mejor usar beforeEach.
  before(() => {
    cy.wrap("some value").as("value");
  });

  it("test #1", () => {
    cy.get("@value").should("eq", "some value");
  });

  it("test #2", () => {
    cy.get("@value").should("eq", "some value");
  });
});
