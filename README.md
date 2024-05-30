# QA
Este es un repositorio para POC de Cypress, con pruebas funcionales y api testing, en base a estructura recomandada por Cypress y Page Object (no recomendado).

# Comando para instalar Cypress
    npm install cypress --save-dev

# Comando para ejecutar proyecto
    .\node_modules\.bin\cypress open 

# Comando para ejecutar modo Headless
    .\node_modules\.bin\cypress run 

# Configuracion
    https://docs.cypress.io/guides/references/configuration#Screenshots 

 ## Notas:
 errores al ejecutar script Windows
 
 ## Error de politicas

 ### Ejecutar PowerShell como administrador, Ver politicas:
    Get-ExecutionPolicy -List

 ### Dar permisos:
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

## Para Habilitar videos de las pruebas
    https://docs.cypress.io/guides/guides/screenshots-and-videos 

### cypress.config.js

```
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:1234',
  },
})
```