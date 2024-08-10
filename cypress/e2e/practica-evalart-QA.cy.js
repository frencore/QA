describe("Hogin y completar formulario", () => {
  before(() => {
    cy.log("Ejecutando precondiciones de TODAS a las pruebas");
    cy.visit("https://tasks.evalartapp.com/automatization/");
    cy.wait(1000);
    cy.get('[typer="text"]').type("895115");
    cy.get('[type="password"]').type(
      "10df2f32286b7120Mi00LTUxMTU5OA==30e0c83e6c29f1c3"
    );
    cy.get(".flex > .bg-white").click();
  });

  beforeEach("Hacemos login por cada prueba", () => {
    cy.log("Ejecutando precondiciones POR CADA PRUEBA");
  });

  afterEach(() => {
    cy.log("Ejecutando postcondiciones POR CADA PRUEBA");
  });

  it("Completar formulario", () => {
    for (var i = 0; i < 2; i++) {
      cy.get(".space-y-5 > .text-center") //fecha
        .invoke("text")
        .then((val1) => {
          //https://filiphric.com/cypress-basics-check-attributes-value-and-text
          const now = new Date(); //https://codepen.io/logoys/pen/PRoZxJ
          var regex = /(\d+)/g; //https://es.stackoverflow.com/questions/95661/obtener-valores-num%C3%A9ricos-de-un-string
          var cadena = val1.toString();
          var cadena2 = cadena.match(regex)[0];
          now.setDate(now.getDate() + parseInt(cadena2));
          // cy.log("nueva fecha " + now);
          const dia = now.getDate() + 1;
          const mes = now.getMonth() + 1;
          const year = now.getFullYear();

          const dia2 = dia.toString().padStart(2, "0"); //https://midu.dev/como-anadir-un-cero-a-la-izquierda-de-un-numero-en-javascript/
          const mes2 = mes.toString().padStart(2, "0");

          cy.get(".space-y-5 > .border-2").type(`${year}-${mes2}-${dia2}`); //ingresa fecha
          cy.wait(2000);
        });

      cy.get(".space-y-4 > .font-bold") //op matematica
        .invoke("text")
        .then((val2) => {
          cy.get(".form-select").select(eval(val2).toString()); //https://es.stackoverflow.com/questions/419502/como-ejecutar-una-operacion-matematica-que-esta-en-una-variable-de-tipo-cadena
          cy.wait(1000);
        });

      cy.get(".flex-wrap > .justify-around > .text-center")
        .invoke("text")
        .then((val3) => {
          var regex2 = /(\d+)/g; //https://es.stackoverflow.com/questions/95661/obtener-valores-num%C3%A9ricos-de-un-string
          var veces = val3.toString();
          var veces2 = veces.match(regex2)[0];

          let regexp = /"(\\.|[^"\\])*"/g; //https://es.javascript.info/task/match-quoted-string
          var letra = val3.toString();
          var letra2 = letra.match(regexp)[0].replace(/['"]+/g, ""); //https://victorroblesweb.es/2017/04/15/quitar-comillas-dobles-string-javascript/#:~:text=log(cadena.,de%20un%20string%20en%20JavaScript.

          var cadenaLetraRepetida = "";
          for (let index = 0; index < Number(veces2); index++) {
            cadenaLetraRepetida = cadenaLetraRepetida + letra2;
          }
          cy.get(".flex-wrap > .justify-around > .border-2").type(
            cadenaLetraRepetida
          );
          cy.wait(1000);
        });

      cy.get(":nth-child(4) > .text-center")
        .invoke("text")
        .then((val4) => {
          var regex3 = /(\d+)/g; //https://es.stackoverflow.com/questions/95661/obtener-valores-num%C3%A9ricos-de-un-string
          var multiplo = val4.toString();
          const multiplo2 = Number(multiplo.match(regex3)[0]);
          cy.wait(2000);

          cy.document().then((doc) => {
            const cantidadcheckbox = doc.querySelectorAll(
              "input[type=checkbox]"
            ).length;

            for (let index = 0; index < cantidadcheckbox; index++) {
              cy.get(`.grid > :nth-child(${index + 1})`)
                .invoke("text")
                .then((val5) => {
                  
                  const valorCheckbox = Number(val5);
                  const resto = valorCheckbox % multiplo2;

                  if (resto == 0) {
                    cy.get(`.grid > :nth-child(${index + 1})`).click();
                  }
                });
            }
            cy.wait(3000);
          });
        });

      cy.get(':nth-child(2) > .border-black').click(); //boton enviar
      cy.wait(3000);
    }
  });
});
